# Rust on AWS with Dynamo

Comandos:

Empacotar localmente:

```
serverless package
```

Deploy:

```
serverless deploy --stage dev
```

Invocar função:

```
serverless invoke -f rust -d '{"first_name": "john", "last_name": "doe"}'
```

Invocar função localmente:

```
serverless invoke local -f rust -d '{"first_name": "john", "last_name": "doe"}'
```

Remover projeto:

```
serverless remove --stage dev
```

## TODO

- [x] Criar minha própria versão, mais enxuta, do serverless-rust (sls-rust)
- [x] Mover instalação do Rust para um diretório próprio
- [x] O plugin do serverless deve conseguir buildar mais de um projeto Rust por vez
- [x] Usar junto com uma lambda em Node.js
- [ ] Testar com serverless-offline
- [ ] Usar com GraphQL
