# Supabase GeoDB

## Descripion
- Supabase GeoDB is uses PostgreSQL's PostGIS and plv8 extensions in Supabase to store/fetch records. 
- Currently it supports querying for records within given radius of a point, features can be further extended (Reference https://postgis.net/docs/using_postgis_dbmanagement.html)
- This project is intended be used as a boilerplate for Business listing applications, real estate applications, local dating apps, Local socialising applications etc.,  

## Project setup

### Database Setup
- After creating databse in supabase, go to Extneions and enable plv8 and PostGIS extensions.
- Run 'create_geo_table.sql' to create a new table, This cannot be done from supabase's GUI as the Geography datatypes are not available in the dropdown.
- Then click on new Query and copy the contents of get_listings.plv8 into IDE and click on "Run", You will see the following output. 

```
Success. No rows returned
```

## Creating table

```
CREATE TABLE table_name (
    id SERIAL PRIMARY KEY,
    name VARCHAR(64),
    location GEOGRAPHY(POINT,4326),
    coords varchar(64),
    created_at date,
    updated_at date,
  ..........
  );
```

## Geo Query with plv8

```
create or replace function get_listings(radius int, point text) 
returns setof all_locations as $$

    var json_result = plv8.execute(
    "SELECT * FROM all_locations WHERE ST_DWithin(location, $1::geometry, $2)", [point, radius]
    );

    return json_result;
$$ language plv8;
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
