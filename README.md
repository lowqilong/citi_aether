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