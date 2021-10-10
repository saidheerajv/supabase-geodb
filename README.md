# Supabase GeoDB

### Link to hosted demo - https://saidheerajv.github.io/supabase-geodb/

### Team members
  Sai Dheeraj Vosawar 
    Github - https://github.com/saidheerajv
    Twitter - https://twitter.com/sai_dheerajv

### Supabase feature used 
   #### Database 
   - To store listings with location using PostgreSQL extension POSTgis
   #### RPC functions 
   - Used RPC functions to fetch the records within "x" Kms radius of a point
   #### Auth 
   - Used magic link authentication to verify user who add listings.

## Descripion
- Supabase GeoDB is uses PostgreSQL's POSTgis extension in Supabase to store/fetch records. 
- Currently it supports querying uptio n KMs radius around a givent point, features can be further extended (Reference https://postgis.net/docs/using_postgis_dbmanagement.html)
- This project can be used as a boilerplate for Bussiness listing applications, realestate applications, local dating apps, Local socializing applications etc.,  

## Project setup

### Database Setup
- After creating databse in supabase, go to Extneions and enable plv8 and PostGIS extensions
- Run 'create_geo_table.sql' to create a new table, This cannot be done from supabase's GUI as the Geography datatypes are not available in the dropdown.
- Then click on new Query and copy the contents of get_listings.plv8 into IDE and click on "Run", You will see the following output. 

```
Success. No rows returned
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).