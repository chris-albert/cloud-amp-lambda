#!/bin/sh

ZIP_FILE="cloudamp-lambda.zip"
S3_BUCKET="cloudamp-lambda"
S3_KEY="cloudamp-lambda.zip"
S3_PATH="s3://$S3_BUCKET/$S3_kEY"

rm $ZIP_FILE
./lambda-build.sh

echo "Uploading zip to S3..."
aws s3 cp "$ZIP_FILE" "$S3_PATH"


echo "Updating lambda functions"
#LAMBDA_FUNCTIONS="Library StreamData StreamUrl"
LAMBDA_FUNCTIONS="library"
for name in $LAMBDA_FUNCTIONS;
do
  echo "Updating lambda function cloudamp-$name"
  aws lambda update-function-code --function-name "cloudamp-$name" --s3-bucket "$S3_BUCKET" --s3-key "$S3_KEY"
done
