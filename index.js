// PYTHON
import json
def lambda_handler(event, context):
    student_name = "Ajaykumar Nadar"
    message = f"Hello_{student_name}"
    return {
        'statusCode': 200,
        'body': message
    }

// NODEJS
export const handler = async (event) => {
  // TODO implement
  const name = "Ajaykumar Nadar"
  const response = {
    statusCode: 200,
    body: JSON.stringify(`Hello ${name}`),
  };
  return response;
};
