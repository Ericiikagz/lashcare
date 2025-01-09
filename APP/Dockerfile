# Step 1: Set the base image
FROM node:18-alpine as build

# Step 2: Set the working directory
WORKDIR /app

# Step 3: Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Step 4: Copy the rest of the application
COPY . .

# Step 5: Build the application
RUN npm run build

# Step 6: Create a production stage
FROM node:18-alpine as production

# Set the working directory
WORKDIR /app

# Install production dependencies only
COPY package.json package-lock.json ./
RUN npm install --production

# Copy the build files from the build stage
COPY --from=build /app/.next ./.next

# Step 7: Expose port and start the server
EXPOSE 3000
CMD ["npm", "start"]
