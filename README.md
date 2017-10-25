Tabster
=======

To do the stuffs:

```
bundle install
```

UI/Webkit/React:
```
cd client && yarn install
cd ..
```

Make sure Postgres 9.6 is running
NOTE: if not background jobbing, start with:

```
pg_ctl -D /usr/local/var/postgresql@9.6 start
```

This will start the Rails server, and webpack for React:
```
foreman start -f Procfile.dev

```
