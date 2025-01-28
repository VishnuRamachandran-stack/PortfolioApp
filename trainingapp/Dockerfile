# Step 1: Build the Angular application
# Use an official Node.js image to build the app
FROM node:18 AS build

# Set the working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the Angular application in production mode
RUN npm run build --prod

# Step 2: Set up Nginx to serve the built application
# Use Nginx as the web server to serve the built app
FROM nginx:alpine

# Copy the build files from the previous stage
COPY --from=build /app/dist/trainingapp/* /usr/share/nginx/html

# Expose port 80 to access the application
EXPOSE 80

# Run Nginx to serve the Angular app
CMD ["nginx", "-g", "daemon off;"]