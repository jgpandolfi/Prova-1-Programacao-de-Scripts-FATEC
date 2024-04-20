document.addEventListener("DOMContentLoaded", function() {
    // Função para exibir a resposta
    function exibirResposta() {
        // Encontrar o radio button selecionado
        var perguntaSelecionada = document.querySelector('input[name="pergunta"]:checked');

        // Verificar se um radio button foi selecionado
        if (perguntaSelecionada) {
            // Obter o valor do radio button selecionado
            var pergunta = perguntaSelecionada.value;

            // Obter a resposta correspondente à pergunta
            var resposta;
            switch (pergunta) {
                case "p1":
                    resposta = "O HTML, ou Hypertext Markup Language (Linguagem de Marcação de Hipertexto), é a linguagem fundamental para o desenvolvimento de páginas da web. O propósito dessa linguagem é fornecer uma estrutura básica para o conteúdo online, permitindo que os desenvolvedores organizem e apresentem informações de forma eficaz. Com HTML, os desenvolvedores podem definir a hierarquia do conteúdo, como títulos, parágrafos, listas e links. Além disso, eles podem incorporar elementos de mídia, como imagens e vídeos, e criar formulários interativos para coletar informações dos usuários. Também é possível acrescentar metatags e demais elementos que podem ser posteriormente estilizados com CSS e/ou programados com JavaScript.";
                    break;
                case "p2":
                    resposta = "O JavaScript, no contexto do desenvolvimento web, adiciona “lógica” às páginas da web, tornando possível que os programadores realizem testes lógicos, alterem elementos HTML ou estilos CSS conforme certas condições. Isso torna páginas Web mais dinâmicas e responsivas. Com ele, é possível criar uma ampla variedade de aplicativos web, desde jogos simples até aplicativos empresariais complexos. Em suma, JavaScript é o que permite que as páginas da web façam mais do que apenas exibir as informações estáticas vindas do HTML e do CSS, transformando-as em experiências interativas para os usuários e/ou que responda a determinados eventos e verifique condições conforme o browser. SO, etc ";
                    break;
                case "p3":
                    resposta = "No contexto da orientação a objetos, classes são 'modelos' que definem as características e comportamentos de objetos. Elas representam um tipo de estrutura que pode ser usada para criar objetos com propriedades e métodos específicos. No JavaScript utliza-se a palavra reservada 'class'";
                    break;
                case "p4":
                    resposta = "Funções em JavaScript são blocos de código reutilizável que realizam tarefas específicas. Elas são definidas usando a palavra-chave function, seguida pelo nome da função e parênteses que podem conter parâmetros. As funções podem ser chamadas em qualquer parte do código, fornecendo os valores necessários para os parâmetros. Elas ajudam a organizar e reutilizar o código, tornando-o mais eficiente e fácil de manter.";
                    break;
                default:
                    resposta = "Nenhuma pergunta foi selecionada!";
                    break;
            }

            // Adicionar a resposta à tabela
            adicionarResposta(resposta);
        } else {
            // Se nenhum radio button estiver selecionado, exibir uma mensagem de aviso
            adicionarResposta("Nenhuma pergunta foi selecionada!");
        }
    }

    // Função para adicionar a resposta à tabela
    function adicionarResposta(resposta) {
        // Encontrar a tabela de respostas
        var tabelaRespostas = document.getElementById("tRespostas");

        // Criar uma nova linha na tabela
        var novaLinha = tabelaRespostas.insertRow(0);

        // Criar uma célula na nova linha e adicionar a resposta como conteúdo
        var novaCelula = novaLinha.insertCell(0);
        novaCelula.textContent = resposta;
    }

    // Adicionar um evento de clique ao botão "verResposta"
    var verRespostaButton = document.getElementById("verResposta");
    if (verRespostaButton) {
        verRespostaButton.addEventListener("click", exibirResposta);
    }
});

document.addEventListener("DOMContentLoaded", function() {
    // Função para limpar as respostas da tabela
    function limparRespostas() {
        // Encontrar a tabela de respostas
        var tabelaRespostas = document.getElementById("tRespostas");

        // Remover todas as linhas da tabela
        while (tabelaRespostas.rows.length > 0) {
            tabelaRespostas.deleteRow(0);
        }
    }

    // Adicionar um evento de clique ao botão "limparRespostas"
    var limparRespostasButton = document.getElementById("limparRespostas");
    if (limparRespostasButton) {
        limparRespostasButton.addEventListener("click", limparRespostas);
    }
});