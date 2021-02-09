# TypeScript Simple API Proxy Template with SAM CLI

## Get started

Make sure that SAM CLI is installed.

1. Build

```bash
sam build
```

2. Testing lambda locally

```bash
# With an example event data - this works
sam local invoke

# Or we can be a bit more specific

# Startup API Gateway and Lambda in a container
sam local start-api

# Test with curl
curl http://127.0.0.1:3000/get-users
```

3. Deploy the function

We first need to build the template, compile TypeScript and copy the dist folder, then deploy. We can override any default config in samconfig.toml file.

```bash
yarn pre-deploy
sam deploy --s3-bucket test.lambdafunction.bucket --s3-prefix simpleapiproxy
```

4. Clean up the function

```bash
aws cloudformation delete-stack --stack-name ts-simple-api-proxy-with-sam
```

# Sam Configuration

There are two configuration files for SAM in this example

- template.yaml

- samconfig.toml
  - This file is a project-level configuration file that stores default parameters.

## .aws-sam folder

Once it is deployed to AWS, code runs from build/dist folder. For the local develoopment, it runs from build/TsSimpleApiProxyFunction. Therefore, the first copy is for actual lambda execution environment and second copy is for local.

```bash
yarn webpack-build && sam build && cp -R ./dist ./.aws-sam/build && cp -R ./dist ./.aws-sam/build/TsSimpleApiProxyFunction
```
