FROM node:lts-iron
 
WORKDIR /gautam_saurav_ui_garden/
 
COPY public/ /gautam_saurav_ui_garden/public
COPY src/ /gautam_saurav_ui_garden/src
COPY package.json /gautam_saurav_ui_garden/
COPY . /gautam_saurav_ui_garden
 
RUN npm install
 
CMD ["npm", "run", "storybook"]