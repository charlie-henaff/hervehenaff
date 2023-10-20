start:
	@docker run --rm -p 80:80 -v $(PWD):/usr/local/apache2/htdocs/ httpd:2.4
