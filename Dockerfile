# User official image of Node.js
FROM node:lts

# Define the environment as production
ENV NODE_ENV=production

# Set the user to root
USER root

# Remove and create a group 'admins' and a user not root named 'polpette' and add it to the group 'admins'
RUN groupdel admins || true && \
    groupadd -g 1005 admins && \
    userdel polpette || true && \
    useradd -m -u 1002 polpette && \
    usermod -aG admins polpette && \
    # Create a repository for the application
    mkdir -p /home/polpette/app /home/polpette/app/api

# Use the repository as a work repository
WORKDIR /home/polpette/app

# Copy the package file to the project
COPY ["./package.json", "./package-lock.json", "./"]

# Copy the rest of the code of the application inside the container
COPY ./ /home/polpette/app

# Making sure that the user 'polpette' has the permission to the directory of the application
RUN chown -R polpette:polpette /home/polpette/app

# Installe les dépendances
RUN npm ci

# Install all the dependencies needed 
RUN npm install --production

# Install nodemon package globally so that the project can run using the command run watch
RUN npm install -g nodemon

# Switch to the non-root user
USER polpette

# Expose the port 3000 for the application
EXPOSE 3000

# Run and watch the project
CMD ["npm", "run", "watch"]
