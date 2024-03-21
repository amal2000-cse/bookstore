# Book Store Management System (Backend)

This section describes the backend functionality of the Book Store Management System application.

## Technologies Used

- **Node.js**: Backend server environment.
- **Express.js**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing book and feedback data.
- **dotenv**: Library for loading environment variables from a .env file.
- **cors**: Middleware for enabling Cross-Origin Resource Sharing.
- **MongoClient**: MongoDB driver for Node.js.

## Installation

No installation steps are required as this project is hosted on GitHub.

## Backend Functionality

### Routes

- **GET /**: Displays a welcome message.
- **POST /feedback**: Inserts feedback into the database.
- **GET /feedback**: Retrieves all feedback from the database.
- **POST /upload-book**: Inserts a book into the database.
- **PATCH /book/:id**: Updates a book's data in the database.
- **DELETE /book/:id**: Deletes a book from the database.
- **GET /all-books**: Retrieves all books from the database, optionally filtered by category.
- **GET /book/:id**: Retrieves a single book based on its ID from the database.

### MongoDB Connection

- Connects to MongoDB using the provided connection URI.
- Defines collections for books and feedback.
- Utilizes the `MongoClient` to perform database operations.
- Implements CRUD operations for managing books and feedback.

## Usage

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/book-store-management.git
    ```

2. Navigate to the project directory:

    ```bash
    cd book-store-management
    ```

3. Start the backend server:

    ```bash
    npm start
    ```

4. The server will run on the specified port, and you can access the API endpoints as described above.

Feel free to explore the backend functionality and contribute to its development!
