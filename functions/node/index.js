import { DynamoDB } from 'aws-sdk'
import { randomUUID } from 'crypto'

const lambdaConfig = {
  region: 'us-east-1',
}

const client = new DynamoDB.DocumentClient(lambdaConfig)

export const handler = async (event, context) => {

  const params = {
    TableName: 'rust_on_aws_users_table',
    Item: {
      ...event,
      uid: randomUUID(),
    },
  }

  try {
    await client.put(params).promise()
    return { message: 'Record written' }
  } catch (e) {
    console.log('e:', e)
    throw new Error(e.message)
  }
}
