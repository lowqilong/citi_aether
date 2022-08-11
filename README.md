# citi_aether

## Backend APIs

### Prerequisites

1. Copy paste .env.example in the same folder. Rename to .env.

2. Add your AWS credentials into the .env file.

### Running the application

1. Go to backend folder

```
cd backend
```

2. Install packages

```
npm i
```

3. Run the application.

For hot-reloading

```
npm run dev
```

No hot-reloading

```
npm run start
```

### Deploying API with Serverless Framework

```
npx serverless deploy
```

## Frontend App

### Prerequisites

1. Configure AWS profile on the CLI

```
aws configure
```

2. Pull amplify changes from AWS

```
amplify pull --appId <appId> --envName staging
```

### Running the application

1. Go to frontend folder

```
cd frontend/my-app
```

2. Install packages

```
npm i
```

3. Run the application.

```
npm run start
```
