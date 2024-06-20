## Pasta e Polpette Backend API

Pasta e Polpette API is developed by Nihel Ouanassi and Tania Olivia as part of our master's degree workshop project. This API serves as the backend for the Pasta e Polpette website.

## Developers
- Tania Olivia
- Nihel Ouanassi

## Technologies Used
- Node.js: Backend JavaScript runtime environment.
- Express: Web application framework for Node.js.
- Docker: Containerization platform for deploying applications.
- PostgreSQL: Relational database management system.
- Render: Hosting platform for deploying the API and Relational Database Service for hosting PostgreSQL database

## Project Structure
- **src/api:** 
- **/controllers:** Contains controllers for handling business logic.
- **/middlewares:** Contains middleware functions for request processing.
- **/routes:** Contains routes for the API.

## Setup
1. **Clone the repository:** 
```bash
git clone https://github.com/taniaolivia/Pasta_e_Polpette-Back.git
```

2. **Navigate to the project directory:**
```bash
cd Pasta_e_Polpette-Back
```
   
3. **Environment variables:**
Create a `.env` file in the root directory of the project and add the necessary environment variables. Refer to the `.env.example` file for required variables.

4. **Database setup:**
Before using the API, ensure that the database is populated with the necessary data [localhost:8080]

5. **Build the Docker image:**
   ```bash
   docker-compose up --build
   ```

6. **Run the Docker container:**
   ```bash
   docker-compose up
   ```

8. **Database Setup:**
Before using the API, ensure that the database is populated with the necessary data

## Database and Local API Access

- **Database Access**: http://localhost:8080
- **Local API Access**: http://localhost:3333/api

## Stopping the Docker Container

To stop the Docker container running the API, use the following command:

```bash
docker-compose down
```

## License

This project is licensed under the terms of the MIT license.

## Copyright

Copyright (c) 2024 Pasta e Polpette. All rights reserved.
