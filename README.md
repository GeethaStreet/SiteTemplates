# SiteTemplates

## Setup 

`npm install` should take care of any dependencies. 

I'm also using supervisor to watch my node changes.
- TODO: add this to the repository.

This is a work in progress, so I'm currently using my local ad tag to render the ad. Thus a local running AdTag is required. 
- TODO: connect this to the KM database to run any KM ad. 

## To Run

`http://localhost:8081/scrape?url=ANY_WEBSITE`

E.g. `http://localhost:8081/scrape?url=https://mobile.nytimes.com/`

You'll see a Kargo Koffee hover show up on the site (that's the only ad currently supported).
