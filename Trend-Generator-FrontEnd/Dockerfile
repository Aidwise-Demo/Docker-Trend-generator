# Use Node.js 20 as the base image
FROM node:20

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files into the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code into the container
COPY . .

# Expose the port your frontend dev server runs on (assuming 3000)
EXPOSE 3000

# Command to start the frontend dev server
CMD ["npm", "run", "dev"]
