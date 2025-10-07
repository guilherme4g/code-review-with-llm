<p align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Target_Flat_Icon.svg/2048px-Target_Flat_Icon.svg.png" width="120" alt="SYPR Logo" />
</p>

<h1 align="center"> SYPR </h1>
<!-- see your pull request -->

<h2> Description </h2>

</p> Esta API tem como objetivo auxiliar equipes de desenvolvimento na revisao de pull requests utilizando <i> modelos de linguagem (LLMs) </i>. A solucao analisa o codigo submetido, identifica potenciais problemas, sugere melhorias e destaca boas praticas, oferecendo uma camada adicional de qualidade antes da aprovacao. </p>

<h2> Requirements </h2>

<ul>  
  <li> Node.js v18+ </li>
  <li> NPM </li>
  <li> Ollama </li>
</ul>

<h2> Step By Step </h2>

```bash
# Pull a LLM by ollama, example: qwen2.5-coder:1.5b

$ ollama pull <model>

# create dotenv file and add environment variables

$ touch .env
$ echo "LLM='<model>'" >> .env

# Intall necessary lib`s to project

$ npm install

# run project

$ npm run start:dev
```

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
