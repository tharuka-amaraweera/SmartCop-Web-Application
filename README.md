# SmartCop
## Police Officers Recommendation and Scheduling Platform

This repository contains the code for a Police Officers Recommendation and Scheduling Platform. The platform utilizes a recommendation system based on officers' experience analysis using the K-Nearest Neighbors (KNN) algorithm and sparse matrix for efficient calculation of cosine similarity. Additionally, it includes scheduling functionality to assign recommended police officers to different time zones using optimization techniques.

## Features

- Recommendation System:
  - Preprocessing of dataset for officers' experience analysis
  - Implementation of the KNN algorithm for recommendation based on similarity
  - Utilization of sparse matrix for efficient calculation of cosine similarity

- Scheduling:
  - Optimization techniques for scheduling recommended officers in different time zones
  - Efficient assignment of officers based on availability and expertise

- Web Application:
  - Development of a web application to display recommendation and scheduling results
  - User-friendly interface to interact with the system

## Technologies Used

- Python: Programming language used for the backend logic
- Flask: Web framework for building the web application
- scikit-learn (sklearn): Library for implementing the KNN algorithm and other machine learning functionalities
- NumPy: Library for efficient numerical computations
- Pandas: Library for data manipulation and analysis
- MongoDB: NoSQL database for storing dataset and scheduling information
- pymongo: Python driver for MongoDB
- React JS: JavaScript library for building the user interface of the web application
- Bootstrap: CSS framework for responsive and visually appealing web design
- Gurobi Optimizer: Commercial optimization solver for scheduling optimization
- Visual Studio Code and PyCharm: Integrated development environments (IDEs) for coding and debugging

## Setup and Installation

1. Clone the repository: `git clone https://github.com/[repository-name].git`
2. Install the required dependencies: `pip install -r requirements.txt`
3. Configure the necessary environment variables (e.g., MongoDB connection details, optimization solver settings, etc.).
4. Run the backend server: `python app.py`
5. Navigate to the web application directory and start the frontend server: `npm start`
