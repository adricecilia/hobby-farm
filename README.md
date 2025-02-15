# Hobby Farm

## Description
Open Source Application for hobby farmers to plan their crops and see what they can grow in their area.

## Table of Contents
- [Stack](#stack)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Troubleshooting](#troubleshooting)

## Stack
- Frontend: Vue.js
- Backend: Laravel
- Database: MySQL
- Containerization: Docker
- Styling: Tailwind CSS
- Libraries: Rough.js (https://github.com/rough-stuff/rough)

## Installation
This project is mounted on a docker container. To run the project, you need to have docker installed on your machine. To install docker, follow the instructions on the [official docker website](https://docs.docker.com/get-docker/).

To run the project, follow these steps:
1. Clone the repository
2. Navigate to the project directory
3. Create a `.env` file in the root directory of the project. You can copy the `.env.example` file and rename it to `.env`
    ```bash
    cp .env.example .env
    ```
4. The most important variables in the `.env` file are the database variables. You need to set the database variables to match your local database configuration. The default values are:
    ```bash
    DB_CONNECTION=mysql
    DB_HOST=mysql
    DB_PORT=3306
    DB_DATABASE=hobby_farm
    DB_USERNAME=
    DB_PASSWORD=
    ```
5. Run the following command to start the project
    ```bash
    docker-compose up -d
    ```
6. After running the command check if the containers are running by running the following command
    ```bash
    docker ps
    ```
    You should see the following containers running:
    - app
    - webserver
    - mysql

7. Run the following command to set up backend dependencies
    ```bash
    docker exec -it app bash
    composer install
    php artisan key:generate
    php artisan migrate
    php artisan config:cache
    ```
8. Run the following command to install the frontend dependencies
    ```bash
    npm install
    ```
9. Navigate to `http://localhost` on your browser to view the project

## Helpfully Commands
- To stop the project, run the following command
    ```bash
    docker-compose down
    ```
- To stop the project and remove the volumes, run the following command
    ```bash
    docker-compose down -v
    ```
- To start the project after stopping it, run the following command
    ```bash
    docker-compose up -d
    ```
  
## Usage
Application directory structure:
- `app/Http/Controllers`: Contains the controllers for the project
- `app/Models`: Contains the models for the project
- `database/migrations`: Contains the database migrations
- `docker/`: Contains the docker configuration files
- `resources/css`: Contains the css files for the project (Only if you are creating hard composition)
- `resources/js`: Contains the vue frontend of the project
- `resources/views`: Contains the base view for the project on which the vue frontend is mounted
- `routes/`: Contains the routes for backend api
- `storage/`: Contains the storage of laravel
- `tests/`: Contains the tests for the project

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Contributing
To contribute to this project, follow these steps:
1. Fork this repository
2. Create a branch: `git checkout -b <branch_name>`, using the issue hashtag and title of issue you are working on, e.g. `git checkout -b feature/#1-add-readme`
3. Make your changes and commit them: `git commit -m '<commit_message>'`, using the title of the issue you are working on, e.g. `git commit -m 'Add README.md'`
4. Push to the original branch: `git push origin <project_name>/<location>`
5. Create the pull request (See the GitHub documentation on [creating a pull request](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request))

## Troubleshooting
If you encounter any issues while setting up the project, you can send an email to [adrian.cecilia4@gmail.com](mailto:adrian.cecilia4@gmail.com) or create an issue on the repository.
