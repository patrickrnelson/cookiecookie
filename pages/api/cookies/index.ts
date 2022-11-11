const { MongoClient } = require("mongodb");
import type { NextApiRequest, NextApiResponse } from 'next';
import { Cookie } from '../../../interfaces';

const uri = `mongodb+srv://${process.env.REACT_APP_MONGO_USERNAME}:${process.env.REACT_APP_MONGO_PASSWORD}@cookieinstance01.bxnld.mongodb.net/?retryWrites=true&w=majority`

const client = new MongoClient(uri, { useNewUrlParser:  true, useUnifiedTopology:  true });

const handler = async(
  req: NextApiRequest,
  res: NextApiResponse<Cookie[] | { error: string }>
) => {
  try {
    client.connect(async() => {
      const allCookies = client.db('Cookies').collection('allCookies');
    
      const cookieArray = await allCookies.find().toArray(); // turn the db response into array for client
      
      return res.status(201).send(cookieArray); // send to the fetcher in the client
    })
  }
  catch (err){
    res.status(500).send({ error: 'failed to fetch data' })
  }
  finally {
    client.close() // close the mongo client
  }
};

export default handler;