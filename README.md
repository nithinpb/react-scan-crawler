[![Build status](https://travis-ci.org/nithinpb/react-scan-crawler.svg?branch=master)](https://travis-ci.org/nithinpb/react-scan-crawler)

# React Scan Crawler

A project to crawl/scrape seed urls based on depth requested. This is a basic project in python for web-crawling using the tools described below. This project is based on [Scan Crawler](https://github.com/nithinpb/scan-crawler) which uses AngularJS instead of ReactJS.

### Screenshot

### Tools 

	1. Python 2.7
	2. Flask (Micro web framework)
	3. Beautifulsoup (For basic implementation. Can be upgraded to scrapy for production needs)
	4. React (Frontend)
	5. Docker (Containerization, Sandbox)

demonstrating the usage of Flask, Beautifulsoup crawler, ReactJS and Docker. 

### Local Development

#### 0. Prerequisites: 

	Install Python, Pip, virtualenv, virtualenvwrapper
	$ pip -V #Version of the file

#### 1. Clone the project:

	$ git clone https://github.com/nithinpb/react-scan-crawler.git
	$ cd react-scan-crawler

#### 2. Install packages:

	$ mkvirtualenv react-scan-crawler # or workon react-scan-crawler if you have already installed
	$ pip install -r requirements.txt

#### 3. Run the application:

	$ python manage.py runserver

#### 4. Configuration changes:
	$ # Change settings.py for port changes
	$ export DEBUG=false # Rerun the application for production server

### Docker 

#### 1. Build the image

	$ docker build -t react-scan-crawler .
	$ docker images # Verify the image in your local docker repo

#### 2. Run the image with your local port mapping	

	$ docker run -d -p 5000:5000 --name react-scan-crawler-service react-scan-crawler

### Tests

	$ nosetests -v