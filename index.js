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

// Lambda S3 Bucket
import json
def lambda_handler(event, context):
    # Extract bucket name and object key from the event
    for record in event['Records']:
        bucket_name = record['s3']['bucket']['name']
        object_key = record['s3']['object']['key']
       
        # Log the message
        print(f"An object has been added to the bucket {bucket_name}: {object_key}")


    return {
        'statusCode': 200,
        'body': json.dumps('Log completed')
    }


// Terraform EC2 Instance
provider "aws" {
access_key = "<YOUR IAM USER ACCESS KEY>"
secret_key = "<YOUR IAM USER ACCESS SECRET KEY>"
region  = "ap-south-1"
}
resource "aws_instance" "terraform_instance" {
  ami           = "<AMI KEY>"
  instance_type = "t2.micro"
}


// Terraform S3 Bucket
provider "aws" {
access_key = "<YOUR IAM USER ACCESS KEY>"
secret_key = "<YOUR IAM USER ACCESS SECRET KEY>"
region  = "ap-south-1"
}

resource "aws_s3_bucket" "my_bucket" {}
