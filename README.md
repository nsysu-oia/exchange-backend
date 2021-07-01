# Back-end Server for [Exchange Program Platform](https://github.com/nsysu-oia/exchange)

## Project setup
```
npm install
```

### Start the server
```
npm run start
```

### Lints and fixes files
```
npm run lint
```

### Note for https server

Enable reverse proxy for Express app via Nginx

```nginx
server {
    listen 3000 ssl;
    listen [::]:3000 ssl;

    server_name studyabroad.nsysu.edu.tw ;

    if ( $host !~ "(^studyabroad.nsysu.edu.tw$)" ) { return 404; }

    include /usr/syno/etc/www/certificate/WebStation_93702c88-8f83-460b-91ed-973b624687e2/cert.conf*;

    include /usr/syno/etc/security-profile/tls-profile/config/WebStation_93702c88-8f83-460b-91ed-973b624687e2.conf*;

    ssl_prefer_server_ciphers on;

	location / {
		proxy_pass http://localhost:3001;

		proxy_set_header X-Real-IP $remote_addr;
		proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
		proxy_set_header X-Forwarded-Proto $http_x_forwarded_proto;
	}
}
```

And modify the Express app's listening port to `3001` in `.env` in the app's root directory

```sh
PORT=3001
```
