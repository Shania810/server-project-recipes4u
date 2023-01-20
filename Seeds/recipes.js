const Recipe = require("../Models/Recipes.Models");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();


const recipes = [
    {
      "category": "sobremesa",
      "title": "Picolé de banana cremoso",
      "description": "Tem coisa melhor que um picolé para refrescar o calor? E se for um picolé caseiro e com fruta? Ainda melhor,não é mesmo?Este picolé caseiro de banana não tem segredo, mas faz toda a diferença que você prepare ele com bananas bem maduras (quanto mais pintadinhas, mais doces serão).",
      "ingredients": [
        "2 bananas nanicas",
        "1 pote de iogurte natural sem açúcar (170 g)",
        "palitos de sorvete"
      ],
      "preparation": [
        "Corte as bananas em rodelas e bata no liquidificador juntamente com o iogurte. Depois de bater, se quiser poderá adicionar alguns ingredientes extra nessa mistura (ex.: gotas ou granulado de chocolate, frutos secos picados, coco ralado, etc)",
        "Transfira a mistura de picolé de banana saudável para as forminhas de sorvete, preenchendo até ao topo.",
        "Leve ao freezer por no mínimo 2 horas ou até você observar que gelou bem.",
        "Retire seu picolé de banana cremoso das forminhas quando quiser consumir e saboreie essa delícia! Gostou?"
      ],
      "time": "10min",
      "level": "easy",
      "rate": 0,
      "image": "https://t1.rg.ltmcdn.com/pt/posts/5/3/9/picole_de_banana_cremoso_9935_600.jpg"
    },
    {
      "category": "sobremesa",
      "title": "Doce de casca de melancia",
      "description": "Algumas pessoas se perguntam se pode comer a casca da melancia. Na verdade, a parte verde da melancia é indigesta, mas você pode preparar um doce com cara de compota usando aquela parte mais durinha e branca da melancia! Essa parte branca da casca da melancia possui vários benefícios: ela contém vitamina C, vitamina B6, zinco, magnésio e potássio. Graças a esses nutrientes, a casca da melancia apresenta alto poder antioxidante, ajuda a depurar nosso organismo, a normalizar a pressão arterial, a desintoxica o trato urinário e a melhorar a circulação sanguínea, por exemplo.\nComo vê, é possível aproveitar a casca da melancia!",
      "ingredients": [
        "450 gramas de casca de melancia em cubinhos (cerca de 4 xícaras de chá)",
        "1 xícara de água (240 mililitros)",
        "2 xícaras de açúcar cristal ou refinado",
        "cravos da índia (a gosto)",
        "1 canela em pau (opcional)"
      ],
      "preparation": [
        "Separe os ingredientes necessários para preparar a receita de doce de casca de melancia.",
        "Retire a parte verde da casca da melancia e",
        "em seguida",
        "corte a parte branca em cubinhos.",
        "Numa panela média",
        "junte o açúcar com a água",
        "os cravos da índia e a canela em pau",
        "misturando rapidamente.",
        "Leve ao fogo baixo e deixe cozinhar até o açúcar ficar bem diluído e começar a ferver.",
        "Nesse momento",
        "adicione a casca de melancia em cubinhos na panela e misture bem. Deixe cozinhar este doce de melancia caseiro por aproximadamente 40 minutos em fogo baixo",
        "mexendo de vez em quando.",
        "O doce estará pronto quando a casca da melancia estiver com uma aparência brilhosa e cristalizada",
        "como mostra a foto abaixo.",
        "Espere o doce esfriar um pouco e sirva-o numa compoteira",
        "para ficar ainda mais bonitinho!",
        "Este doce de casca de melancia em cubinhos é simplesmente maravilhoso! Esperamos que tenha apreciado essa deliciosa e não hesite em fazer aí na sua casa. Bom apetite!",
        
      ],
      "time": "45min",
      "level": "easy",
      "rate": 0,
      "image": "https://t1.rg.ltmcdn.com/pt/posts/3/0/6/doce_de_casca_de_melancia_10603_600.jpg"
    },
    {
      "category": "sobremesa",
      "title": "Pudim engana visita de maizena",
      "description": "Hoje é dia de sobremesa feita no liquidificador: vou te ensinar a fazer pudim falso feito com bolacha maizena!\nEsse pudim é perfeito para aqueles dias que temos com poucos ingredientes em casa, já que ele não leva leite condensado e é complementado com as bolachas de maizena. E a receita é fácil e prática daquele jeito que a gente adora: é só bater os ingredientes da massa no liquidificador e pronto!",
      "ingredients": [
        "500 mililitros de leite integral",
        "3 ovos",
        "120 gramas de açúcar (¾ xícara)",
        "10 unidades de bolacha maizena",
        "½ xícara de açúcar (80 gramas)"
      ],
      "preparation": [
        "Comece separando os ingredientes e deixe os ovos em temperatura ambiente.",
        "Coloque todos os ingredientes no liquidificador e bata até ficar bem lisinho.",
        "Despeje a massa do seu pudim engana visita na forma com o caramelo e leve para assar em banho-maria por 1h30 ou faça o teste do palito pra ter certeza que seu pudim está assado.",
        "Deixe o pudim com bolacha maizena na geladeira por pelo menos 2 horas e sirva em seguida.",
        "Seu pudim engana visita está pronto! Você vai adorar a praticidade desse pudim com bolacha de maizena. Bom apetite!",
        
      ],
      "time": "2h 30min",
      "level": "easy",
      "rate": 0,
      "image": "https://t2.rg.ltmcdn.com/pt/posts/7/2/6/pudim_engana_visita_de_maizena_10627_600.jpg"
    },
    {
      "category": "drink",
      "title": "Vitamina de banana com espinafre",
      "description": "Este smoothie tricolor, ou smoothie colorido, é uma das receitas de verão que você precisa preparar! Além de lindo e muito apetitoso, ele é rico em vários benefícios e perfeito para incluir no seu café da manhã saudável",
      "ingredients": [
        "2 xícaras de espinafre fresco ou congelado",
        "3 bananas congeladas",
        "2 talos de aipo/salsão",
        "1 pera picada sem casca",
        "1 maçã picada sem casca",
        "1 rodela de gengibre fresco ralado",
        "1 xícara de mix de frutas vermelhas congelados",
        "½ xícara de água (120 mililitros)"
      ],
      "preparation": [
        "Começamos por preparar a misturinha que vai na base deste smoothie tricolor. Para isso coloque no liquidificador as frutas vermelhas, 1 banana e colheres de sopa de água. Bata muito bem até triturar estas frutas e conseguir uma batida cremosa. Divida essa batida por 2-3 copos altos e transparentes e lave ou enxague o liquidificador.",
        "Em seguida prepare a camada amarela. Para isso bata no liquidificador a pera, a maçã, 1 banana e o gengibre ralado. Se necessário, coloque 1-2 colheres de sopa de água e bata até ficar bem homogêneo. Divida essa batida pelos copos e volte a lavar ou enxaguar o liquidificador.",
        "Finalmente, para a camada verde, bata no liquidificador os espinafres com o aipo e a última banana. Mais uma vez coloque um pouco de água para a batida ficar cremosa e homogênea.",
        "Coloque essa vitamina de banana com espinafre nos copos e decore com frutas vermelhas, por exemplo. Sirva seu smoothie colorido em seguida e desfrute desta deliciosa combinação de frutas e propriedades. Bom apetite!"
      ],
      "time": "15min",
      "level": "easy",
      "rate": 0,
      "image": "https://t2.rg.ltmcdn.com/pt/posts/4/2/9/vitamina_de_banana_com_espinafre_7924_600.jpg"
    },
    {
      "category": "drink",
      "title": "Vitamina de morango com banana",
      "description": "Se você quer seguir uma alimentação saudável, com ingredientes que melhoram o funcionamento do seu organismo para fazer você se sentir melhor, aumente o consumo de vitaminas de frutas! Estas bebidas saborosas são bem práticas e simples de preparar e gostosas de beber. Uma das sugestões mais saborosas é a vitamina de banana e morango com aveia que ensinamos a preparar abaixo. Esta batida fornece toda a energia necessária para uma atividade física média, é preparada sem leite (e, por isso, sem lactose e com menos calorias que as batidas com leite) e, por conta da banana e da aveia, ajuda ao bom funcionamento dos intestinos. Siga o passo a passo e prepare este suco para dar energia!",
      "ingredients": [
        "8 morangos frescos",
        "1 banana madura",
        "1 colher de chá de adoçante ao seu gosto",
        "2 colheres de sopa de aveia em flocos",
        "1 copo de água filtrada"
      ],
      "preparation": [
        "Reúna os ingredientes para preparar esta vitamina de aveia com banana e morango. Neste caso usei mel como adoçante, mas você pode usar adoçantes baixos em calorias como o xylitol ou estévia.",
        "Coloque a aveia em um pouco de água morna por 10 minutos, assim os flocos ficarão mais suaves e fáceis de bater para misturar nesta vitamina sem leite.",
        "Descasque a banana, corte em rodelas e coloque no copo do liquidificador.",
        "Adicione os morangos lavados e picados. Adicione o adoçante e o copo de água filtrada.",
        "Bata as frutas até que já não restem pedaços.",
        "Seguidamente acrescente a aveia escorrida e continue batendo até que a vitamina de banana e morango fique homogênea. Quando terminar, se quiser pode passar por uma peneira para eliminar os pedacinhos de fruta e aveia.",
        "Está pronta sua vitamina de morango com banana e aveia! Beba de imediato pois, à medida que os minutos e horas passam, os ingredientes perdem a sua frescura e, com isso, diminuem suas propriedades benéficas. Prove e diga nos comentários o que você achou desta batida saudável!"
      ],
      "time": "15min",
      "level": "easy",
      "rate": 0,
      "image": "https://t2.rg.ltmcdn.com/pt/posts/0/1/6/vitamina_de_morango_com_banana_3610_600.jpg"
    },
    {
      "category": "drink",
      "title": "Chocolate quente cremoso",
      "description": "Gostaria de aprender a preparar um chocolate quente cremoso e delicioso? Essa é uma bebida muito popular em todo o mundo e perfeita para combater o frio do inverno e acalmar a larica de consumir algo bem docinho e reconfortante.Se o seu chocolate quente sempre fica demasiado líquido, continue lendo esse passo a passo do TudoReceitas e descubra como preparar o melhor chocolate quente da sua vida! Esta é uma receita de chocolate quente cremoso com chocolate em pó ou cacau que fica pronta bem rapidinho e na consistência certa. Experimente!",
      "ingredients": [
        "3 colheres de sopa de chocolate em pó solúvel ou cacau em pó",
        "2 xícaras de leite (480 mililitros)",
        "1 colher de sopa de maizena",
        "2 colheres de sopa de açúcar",
        "3 colheres de chá de leite condensado (opcional)",
        "1 caixa de creme de leite (200 ml)"
      ],
      "preparation": [
        "Para preparar esse chocolate quente cremoso e gostoso comece por bater no liquidificador o chocolate ou cacau em pó, o leite, a maizena, o açúcar e o leite condensado. Não substitua o chocolate ou cacau em pó por achocolatado porque seu chocolate quente ficará demasiado doce.",
        "Transfira a mistura do liquidificador para uma panela e deixe esquentar no fogo baixo, mexendo sempre, até espessar e quase ferver. Desligue o fogo, junte o creme de leite e misture.",
        "Seu cacau ou chocolate cremoso está pronto! Sirva em duas xícaras e, se quiser, decore com canela em pó, mini marshmallows e raspa de chocolate, como na foto. Acompanhe essa delícia com, por exemplo, biscoitos de baunilha caseiros e bom apetite!"
      ],
      "time": "10min",
      "level": "easy",
      "rate": 0,
      "image": "https://t2.rg.ltmcdn.com/pt/posts/1/4/5/chocolate_quente_cremoso_4541_600.jpg"
    },
    {
      "category": "drink",
      "title": "Chocolate quente cremoso com chocolate em barra",
      "description": "Os verdadeiros chocolatudos sabem que fazer chocolate quente com chocolate em barra é completamente diferente de usar chocolate em pó ou achocolatado. Isto porque o chocolate em barra deixa a bebida naturalmente mais cremosa sem necessidade de adicionar creme de leite nem amido de milho!Quer saber como fazer chocolate quente cremoso com chocolate em barra? Aqui no TudoReceitas compartilho os truques e modo de preparo passo a passo em fotos desta bebida de inverno ótima para esquentar e adoçar seu dia. Verá que é bem fácil e que o resultado final é outro nível! Para adoçar e ajudar na cremosidade, este chocolate quente perfeito é também preparado com leite condensado. Tem tudo para dar certo!",
      "ingredients": [
        "1 barra de chocolate ao leite ou meio amargo (200 g)",
        "1½ xícaras de leite integral",
        "½ lata de leite condensado"
      ],
      "preparation": [
        "Comece por picar o chocolate, assim ele demorará menos para derreter. Coloque o chocolate, o leite integral e o leite condensado numa panela.",
        "Leve a panela ao fogo médio-baixo e fique mexendo para derreter todo o chocolate e evitar queimar. Quando começar a ferver, mexa por mais 2-3 minutos ou até espessar na consistência do seu agrado.",
        "Divida o conteúdo da panela por 3-4 xícaras, deixe esfriar um pouco e está pronto seu chocolate quente com chocolate em barra! Desfrute desta bebida de inverno deliciosa e diga nos comentários o que você achou. Bom apetite!"
      ],
      "time": "10min",
      "level": "easy",
      "rate": 0,
      "image": "https://t1.rg.ltmcdn.com/pt/posts/0/8/4/chocolate_quente_cremoso_com_chocolate_em_barra_9480_600.jpg"
    },
    {
      "category": "massas",
      "title": "Macarrão com almôndegas",
      "description": "Nosso macarrão com almôndegas fica pronto em menos de 30 minutos e leva poucos ingredientes que com certeza você tem na geladeira. Para agilizar o preparo vamos usar molho de tomate pronto mas você pode usar a versão caseira se quiser.",
      "ingredients": [
        "200 gramas de espaguete",
        "água suficiente para cozinhar o macarrão",
        "2 xícaras de molho de tomate",
        "500 gramas de carne moída",
        "1 ovo",
        "3 dentes de alho",
        "½ cebola",
        "1 colher de sopa de orégano",
        "2 colheres de sopa de farinha de rosca",
        "sal e pimenta a gosto"
      ],
      "preparation": [
        "Comece cozinhando o macarrão de acordo com as instruções da embalagem e separe o molho de tomate.",
        "Em seguida vamos preparar as almôndegas: em uma tigela grande coloque todos os ingredientes exceto o azeite e o molho de tomate.",
        "Misture bem com as mãos até todos os ingredientes ficarem bem incorporados. Modele bolinhas no tamanho que desejar.",
        "Leve uma panela ao fogo médio em seguida despeje o azeite e frite as bolinhas de carne sem encher a panela.",
        "Sirva em seguida o macarrão espaguete com o molho e as almôndegas. Bom apetite!"
      ],
      "time": "30 min",
      "level": "easy",
      "rate": 0,
      "image": "https://t2.rg.ltmcdn.com/pt/posts/1/4/9/macarrao_com_almondegas_facil_10941_600.jpg"
    },
    {
      "category": "massas",
      "title": "Mac and cheese com bacon",
      "description": "Nosso macarrão com queijo de hoje traz um molho branco caseiro bem temperado com noz-moscada e pimenta branca e, claro, muito queijo com cheddar e muçarela. O macarrão usado aqui foi o penne, mas você pode usar outros tipos de massa de grão curto.\r\nE a melhor parte: o preparo leva menos de 30 minutos e, se você quiser, pode dobrar a quantidade de ingredientes para fazer essa delícia para mais pessoas.",
      "ingredients": [
        "1 xícara de macarrão",
        "água suficiente para cozinhar o macarrão",
        "100 gramas de cheddar",
        "100 gramas de muçarela",
        "100 gramas de bacon",
        "1 xícara de leite integral",
        "1 colher de sopa de farinha de trigo",
        "1 colher de sopa de manteiga",
        "sal",
        "pimenta branca",
        "noz-moscada"
      ],
      "preparation": "Essa receita é fácil de fazer e é bem comum de se comer na infância, mas é um prato que vale ser feito em qualquer idade. Para quem é curioso, vale saber que o primeiro mac and cheese tem influência francesa e passou a ser feito nos Estados Unidos depois dos anos 1770.\nPrepare o macarrão de acordo com as instruções da embalagem. Reserve ½ xícara de chá da água do cozimento caso seja necessário usar nos próximos passos.\nLeve uma panela ao fogo e frite o bacon até ficar bem dourado e crocante. Se achar necessário, despeje um fio de azeite.\nAgora vamos preparar a base de molho branco: leve uma panela ao fogo baixo e derreta a manteiga. Assim que derreter, junte a farinha e mexa bem até incorporar e dourar levemente.\nEm seguida despeje de uma só vez o leite e mexa bem (misture sem parar para não empelotar).\nTempere com sal, pimenta do reino branca e noz-moscada ralada na hora a gosto. Misture bem e cozinhe até o molho encorpar.\nJunte os queijos e misture bem até derreter.\nDesligue o fogo, junte o macarrão cozido e mexa - se o molho estiver muito espesso, despeje a água do cozimento do macarrão reservada anteriormente.\nAgora é só servir o seu mac and cheese com bacon! Você vai adorar essa receita suculenta de macarrão com queijo. Bom apetite!",
      "time": "30 min",
      "level": "easy",
      "rate": 0,
      "image": "https://t2.rg.ltmcdn.com/pt/posts/7/1/8/mac_and_cheese_com_bacon_10817_600.jpg"
    },
    {
      "category": "prato principal",
      "title": "Lombo de porco recheado com frutas",
      "description": "lombo de porco recheado com frutas, um prato consistente, rico em sabor, e com uma textura e aroma que surpreenderão todos os seus convidados.",
      "ingredients": [
        "1 unidade de Lombo de porco",
        "60 gramas de Arando",
        "60 gramas de uva-passa",
        "3 unidades de Maçã verde",
        "3 colheres de café de Açúcar",
        "½ copo de vinho branco",
        "1 pitada de Pimenta",
        "1 pitada de sal"
      ],
      "preparation": "O primeiro passo para fazer esta receita de lombo de porco recheado é juntar todos os ingredientes. Idealmente, o lombo de porco deve pesar entre 1 kg e 1,5 kg. Se você quiser, pode substituir o açúcar por adoçante.\nPara o recheio: coloque uma panela funda em fogo médio, adicione as maçãs descascadas, uma colher de sopa de manteiga e refogue por alguns minutos. Depois adicione os arandos e as uvas-passa com um pouco de sal e pimenta, envolva e baixe o fogo.\nDica: Se quiser pode adicionar também um pouco de pasta de alho e canela em pó.\nAdicione o vinho, para intensificar os sabores, e deixe cozinhar em fogo médio-baixo até a maçã amolecer. Desligue o fogo e deixe esfriar.\nAdicione o vinho, para intensificar os sabores, e deixe cozinhar em fogo médio-baixo até a maçã amolecer. Desligue o fogo e deixe esfriar.\nApós o passo anterior, abra o lombo de porco ao meio e tempere com sal e pimenta dos dois lados. Adicione ao centro os ingredientes do recheio já frios ou, no máximo, mornos.\nEnrole o lombo com o recheio no interior, e amarre com fio barbante. Leve ao fogo médio uma frigideira com um pouco de óleo ou manteiga e doure o lombo de todos os lados para que, depois de assar, se mantenha tenro no interior.\nDepois de bem dourado, coloque o lombo de porco num refratário, e asse no forno preaquecido a 180 ºC por 30-40 minutos, aproximadamente.\nDica: O tempo que o lombo fica no forno depende da espessura dele. Para conferir se está pronto, faça um corte ao meio e espreite o interior.\nQuando o lombo de porco recheado com frutas estiver assado, retire do forno e deixe repousar por 5 minutos, para que os sucos assentem. Sirva o lombo cortado em fatias grossas e bom apetite!",
      "time": "1h30min",
      "level": "moderate",
      "rate": 0,
      "image": "https://t1.rg.ltmcdn.com/pt/posts/8/3/9/lombo_de_porco_recheado_com_frutas_3938_600.jpg"
    },
    {
      "category": "prato principal",
      "title": "Virado à paulista",
      "description": "Quem visita São Paulo, não pode sair sem antes provar o típico virado à paulista! Trata-se de um prato típico da comida caipira, preparado com tutu de feijão, banana frita, couve, arroz, ovos fritos e carne grelhada.",
      "ingredients": [
        "4 unidades de ovo",
        "1 maço de couve pequena",
        "1 dente de alho picado",
        "2 colheres de sopa de óleo",
        "300 gramas de arroz",
        "tutu de feijão",
        "pimenta do reino",
        "sal",
        "Para marinar a carne:\r\n 4 unidades de bisteca de porco",
        "2 unidades de limão",
        "1 maço de salsinha",
        "pimenta do reino",
        "Para empanar a banana:\r\n 4 unidades de banana",
        "100 gramas de farinha de trigo",
        "200 gramas de farinha de rosca",
        "2 unidades de ovo batido"
      ],
      "preparation": [
        "Prepare a receita do virado à paulista tradicional cuidando de cada ingrediente separadamente. Comece pela carne: tempere as bistecas com pimenta do reino e coloque-as em um recipiente com a salsinha e o suco de limão. Reserve, no mínimo, por 30 minutos. \nAgora as bananas: descasque-as e corte em metades. Empane passando na farinha de trigo, depois pelos ovos e por último na farinha de rosca. Frite em óleo quente até ficarem douradas e reserve em papel absorvente.\nContinue preparando o virado à paulista tradicional: corte a couve em tiras finas e leve a refogar no fogo médio com o óleo e o alho. Desligue o fogo quando estiver murcha e tempere com sal e pimenta do reino, reserve.\nAproveitando que a carne ainda está a marinar, frite os ovos em óleo quente, temperados com um pouco de sal, e cozinhe o arroz em uma panela com água e sal até ficar pronto.\nNo momento de cozinhar a bisteca, tempere com sal. Você pode fritar ou grelhar, como preferir, já que ambas as opções são válidas no virado à paulista tradicional.\nFinalmente sirva o virado à paulista tradicional dispondo cada ingrediente em pratos individuais",
        "ao lado uns dos outros",
        "com exceção do ovo que deve ficar em cima da carne ou do arroz. Acompanhe com tutu de feijão e delicie-se",
        "bom apetite!"
      ],
      "time": "45 min",
      "level": "moderate",
      "rate": 0,
      "image": "https://t2.rg.ltmcdn.com/pt/posts/5/4/2/virado_a_paulista_tradicional_1245_600.jpg"
    },
    {
      "category": "acompanhamento",
      "title": "Purê de banana nanica",
      "description": "A banana nanica, conhecida em alguns lugares como banana d'água, é uma fruta muito popular e bastante consumida. Além dessas curiosidades, a banana nanica possui muitos benefícios. Dentre eles, destacamos o fato de essa espécie de banana possuir menos açúcar e mais potássio que as outras. A banana nanica também é rica em vitamina B6, que tem papel importante na formação de anticorpos e hemoglobina no sangue.Vemos muitas receitas de banana nanica em pratos doces, não é mesmo? No entanto, a receita que iremos apresentar aqui terá a banana nanica servida como prato salgado, pois iremos sugerir que você prepare um purê de banana que ficará perfeito acompanhando uma carne suína ou peixes!",
      "ingredients": [
        "4 bananas nanicas maduras",
        "½ colher de sopa de manteiga",
        "⅓ xícara de leite líquido",
        "sal (a gosto)",
        "cebolinha ou salsinha picada (a gosto)",
        "queijo parmesão ralado (a gosto)"
      ],
      "preparation": [
        "Separe os ingredientes que irá usar para preparar o purê de banana nanica.Para fazer um purê de banana, observe a casca das bananas para saber se está no ponto correto de amadurecimento. Quanto mais amareladas e com manchas escuras na casca, mais chances delas estarem maduras e no ponto ideal.",
        "Descasque e corte as bananas em rodelas e acomode-as num recipiente de vidro.como fazer purê de banana 210; pure de banana 1,6k; purê de banana simples 110",
        "Leve as bananas ao microondas por cerca de 1 minuto e meio para deixá-las bem macias.",
        "Amasse bem as bananas com o auxílio de um garfo.",
        "Numa panela pequena, em fogo médio, aqueça o leite e adicione a manteiga.Assim que iniciar a fervura. acrescente as bananas amassadas e misture bem.",
        "Junte o queijo parmesão ralado e misture novamente.\nTempere com sal e deixe cozinhando em fogo baixo, mexendo sempre até o purê ficar bem consistente.",
        "Desligue o fogo, adicione a salsinha ou a cebolinha picada e misture novamente.",
        "Seu purê de banana nanica está pronto para ser servido. Ele ficará perfeito servido como acompanhamento de um peixe ou carne suína grelhados ou assados!",
        "Esperamos que tenha gostado dessa receita! Bom apetite!"
      ],
      "time": "15min",
      "level": "easy",
      "rate": 0,
      "image": "https://t2.rg.ltmcdn.com/pt/posts/9/8/8/pure_de_banana_nanica_10889_600.jpg"
    },
    {
      "category": "acompanhamento",
      "title": "Molho italiano com cogumelo",
      "description": "Sabemos que cada comida tem sua característica marcante e hoje, quis valorizar esse delicioso molho italiano com o Shimeji. O molho feito com esse cogumelo deixa qualquer massa ou risoto ainda mais gostoso!O molho Alfredo, feito nessa receita, surgiu em Roma e possui esse nome devido ao seu criador. Originalmente, ele é composto de creme, parmesão e manteiga. Simples, porém repleto de sabor, incrementei com um Shimeji fresco. Seu sabor intenso e mais amargo combinou muito bem com os sabores do molho original!",
      "ingredients": [
        "160 gramas de Shimeji",
        "2 colheres de sopa de Manteiga",
        "200 gramas de Creme de leite",
        "1 pitada de Noz-moscada",
        "50 gramas de Queijo parmesão ralado",
        "1 pitada de Sal"
      ],
      "preparation": [
        "Comece separando todos os cogumelos do cacho do Shimeji. Em seguida, limpe utilizando um papel-toalha úmido para retirar a sujeira.",
        "Na panela, coloque a manteiga e o Shimeji. Misture e deixe em fogo médio para que amoleça.",
        "Acrescente o creme de leite e mexa para incorporar.",
        "Deixe ferver por 4 minutos e desligue.",
        "Adicione o parmesão, a noz-moscada e o sal. Mexa até que o parmesão derreta. Se seu molho estiver muito grosso, acrescente 50ml de água ainda com o fogo ligado. Assim, ele ficará mais cremoso.",
        "Esse molho fica perfeito para acompanhar um macarrão, batatas cozidas, massas diversas, risoto. É, simplesmente, de deixar qualquer um sem palavras!"
      ],
      "time": "15m",
      "level": "easy",
      "rate": 0,
      "image": "https://t1.rg.ltmcdn.com/pt/posts/5/8/8/molho_italiano_com_cogumelo_10885_600.jpg"
    },
    {
      "category": "acompanhamento",
      "title": "Abacate com sal: maionese de abacate",
      "description": "Que o abacate é um alimento cheio de benefícios, nós já sabemos! Essa fruta é rica em vitamina C, E e K, e além disso também tem minerais como potássio e magnésio que são importantes para nossa saúde.Embora seja mais comum encontrarmos receitas doces com abacate, atualmente está cada vez mais fácil encontrarmos receitas salgadas com abacate! E essa é a proposta para a receita que iremos apresentar aqui!Que tal aprender a preparar uma maionese de abacate rápida e deliciosa? Essa poderá ser uma opção vegana para você servir com algum petisco ou também poderá servir junto com torradinhas integrais, como iremos sugerir nesta receita!",
      "ingredients": [
        "½ abacate maduro",
        "½ limão pequeno",
        "1 colher de sopa de mostarda",
        "1 colher de sopa de azeite de oliva",
        "sal (a gosto)",
        "salsinha picada (a gosto)",
        "torradinhas integrais (a gosto)",
        "tomatinhos cereja (a gosto)",
        "folhas frescas de manjericão (para decorar - opcional)"
      ],
      "preparation": [
        "Separe todos os ingredientes necessários para preparar a receita de maionese simples de abacate. Sugerimos que você sirva com torradinhas, porém, fique à vontade para optar por outros acompanhamentos.",
        "Tire o abacate da casca e amasse os pedaços com o auxílio de um garfo.",
        "Adicione o sal ao abacate amassado e misture bem.",
        "Adicione também a salsinha picada, o azeite de oliva e a mostarda.",
        "Finalize com as gotinhas de limão. Neste momento, prove para saber se precisa acertar ou não a quantidade de sal na receita.",
        "Misture tudo muito bem e se preferir use um mixer ou um processador para ficar bem liso e homogêneo.",
        "Como sugestão de acompanhamento, que tal servir sua maionese de abacate em quadradinhos de torradas integrais (como se fossem canapés) e decorar com tomatinhos cereja e folhinhas frescas de manjericão, para dar aquele aroma maravilhoso?",
        "Sua receita salgada de abacate está pronta para ser servida como acompanhamento ou como entradinha de um prato especial!",
        "Esperamos que tenha gostado da receita! Bom apetite!"
      ],
      "time": "10min",
      "level": "easy",
      "rate": 0,
      "image": "https://t2.rg.ltmcdn.com/pt/posts/9/0/8/abacate_com_sal_maionese_de_abacate_10809_600.jpg"
    },
    {
      "category": "acompanhamento",
      "title": "Farofa de paçoca",
      "description": "Essa farofa é muito popular especialmente no nordeste do país e costuma reunir ingredientes bastante apreciados na culinária local. Entre eles, a carne seca, a farinha de mandioca e a manteiga de garrafa. A palavra paçoca é de origem indígena e quer dizer: terminar socando, por isso, na receita tradicional sugerimos o uso do pilão para este fim!Na receita que apresentaremos aqui no TudoReceitas, iremos te ensinar como preparar essa farofa, que tem uma crocância e uma umidade que a deixam irresistível! E se não tiver a manteiga de garrafa, não se preocupe, pois poderá usar a manteiga que você tiver mais disponível na sua cidade.",
      "ingredients": [
        "250 gramas de carne seca dessalgada e cozida",
        "½ unidade de cebola grande picada",
        "1 dente de alho picado",
        "3 colheres de sopa de de manteiga de garrafa (ou a gosto)",
        "¾ xícara de farinha de mandioca",
        "sal (a gosto)",
        "coentro (a gosto)"
      ],
      "preparation": [
        "Separe todos os ingredientes necessários para preparar a receita de farofa de paçoca.A carne seca precisa estar dessalgada e cozida. Aqui, cozinhamos a carne seca na panela de pressão apenas com folha de louro e por cerca de 25 minutos.",
        "Desfie a carne seca com o auxílio de um pilão, deixando-a bem triturada., Depois que terminar de socar a carne",
        "reserve-a e passe para o próximo passo. , Numa frigideira média",
        "aqueça a manteiga de garrafa e refogue a cebola em fogo baixo até ela murchar.Adicione o alho picado e refogue mais um pouco. ,\n'Acrescente a carne seca desfiada e deixe-a refogando por cerca de 8 minutos em fogo baixo, envolvendo todos os ingredientes.','Adicione a farinha de mandioca e e tempere com sal.",
        "Deixe a farofa refogando por mais 5 minutos para que a farinha fique levemente torrada, mexendo sempre para não queimar.Em seguida, desligue o fogo, acrescente o coentro e misture bem.",
        "Sua farofa de paçoca com carne seca está pronta para ser servida!Ficará perfeita acompanhando um churrasco ou outro prato assado!",
        "Esperamos que tenha gostado da receita! Bom apetite!"
      ],
      "time": "30min",
      "level": "easy",
      "rate": 0,
      "image": "https://t1.rg.ltmcdn.com/pt/posts/4/6/6/farofa_de_pacoca_10664_600.jpg"
    },
    {
      "category": "sobremesa",
      "title": "Brigadeirão de panela",
      "description": "Imaginem uma sobremesa deliciosa e cremosa feita com leite condensado, creme de leite, ovos, manteiga e chocolate, que lembra bastante a consistência e o sabor de um flan? Estamos falando do brigadeirão, esta receita brasileira que conquistou muita gente apaixonada pelo brigadeiro tradicional, que é sua inspiração!Nesta receita, vamos te ensinar como preparar um brigadeirão que não irá ao forno, pois será cozido em banho-maria, na boca do fogão! O melhor disso tudo é que você ainda irá economizar no preparo da receita, pois não precisará assá-lo por quase 1 hora, como a receita original sugere.",
      "ingredients": [
        "3 unidades de ovos",
        "1 lata de leite condensado",
        "1 caixa de creme de leite",
        "200 mililitros de leite",
        "½ xícara de chocolate em pó",
        "2 colheres de sopa de manteiga sem sal",
        "1 xícara de chocolate granulado para decorar (aproximadamente)"
      ],
      "preparation": [
        "Separe os ingredientes necessários para preparar esta receita de brigadeirão de panela.Estamos usando o chocolate em pó e não o achocolatado, pois este contém mais açúcar.Utilize a manteiga sem sal para não interferir no sabor da receita. Ela precisa estar em ponto de pomada (ou seja, em temperatura ambiente).",
        "No liquidificador, adicione os ovos e o leite condensado.",
        "Adicione também a manteiga, o creme de leite, o leite líquido e o chocolate em pó, batendo tudo até ficar homogêneo.",
        "Transfira esse líquido para uma forma com um furo central (18cm de diâmetro), untada com manteiga e polvilhada com açúcar.",
        "Cubra a forma com papel alumínio e acomode-a dentro de uma panela maior, com água (na altura de 3 dedos no máximo), para que o brigadeirão cozinhe em banho maria.Feche a tampa da panela e, em fogo moderado, deixe cozinhar por cerca de 25 minutos ou até ficar firme.",
        "'Passado esse tempo",
        "levante o papel alumínio com cuidado e verifique com a ponta de uma faca se o brigadeirão já está firme e cozido. Se a faca sair limpa",
        "já estará pronto.Retire a forma de dentro da panela e deixe o brigadeirão esfriar um pouco",
        "para que desenforme com facilidade. , Após esfriar",
        "desenforme o brigadeirão",
        "passando uma espátula pela lateral e pelo centro da forma e certifique-se de que já está bem soltinho",
        "girando a forma delicadamente de um lado para o outro. , Com o brigadeirão já desenformado",
        "decore-o com chocolate granulado e deixe-o na geladeira até a hora de servir. , Seu brigadeirão feito na panela já está pronto para ser saboreado. Temos certeza que esta receita fará muito sucesso por aí!,Esperamos que tenha gostado da receita! Bom apetite!"
      ],
      "time": "30min",
      "level": "moderate",
      "rate": 0,
      "image": "https://t2.rg.ltmcdn.com/pt/posts/5/7/6/brigadeirao_de_panela_10675_600.jpg"
    },
    {
      "category": "sobremesa",
      "title": "Cocada morena baiana",
      "description": "Esse doce, que tem como ingrediente principal o coco, é muito apreciado em todas as regiões do país e na Bahia é uma iguaria presente em muitos tabuleiros de baianas que vendem acarajé em barracas de praia, restaurantes, entre outros estabelecimentos!Existem várias receitas de cocada: tem cocada clara, cocada morena, cocada cremosa, cocada de colher, etc. A cocada que iremos apresentar aqui é uma versão cremosa da cocada morena, conhecida também como cocada de coco queimado, onde o coco ralado fresco vai ao fogo com o açúcar caramelizado, dando esse sabor e cor característicos da cocada. O preparo é bem simples e econômico e o resultado é uma cocada caseira de fazer lamber os dedos - e a panela!",
      "ingredients": [
        "2 xícaras de açúcar cristal",
        "200 mililitros de água",
        "3 colheres de sopa de vinagre de álcool",
        "2½ xícaras de coco ralado (fresco)",
        "½ caixa de leite condensado",
        "cravos da índia (opcional - a gosto)"
      ],
      "preparation": [
        "Separe os ingredientes necessários para preparar a receita de cocada de coco queimado. Aqui, usamos o coco fresco ralado no ralo grosso mas, se você preferir, poderá usar o coco ralado industrializado (porém sem açúcar, para evitar que a cocada fique demasiadamente doce).Prepare a calda primeiro, misturando numa panela o açúcar, a água e o vinagre. Misture tudo ainda com o fogo desligado, para diluir bem o açúcar.",
        "Ligue o fogo e deixe a mistura cozinhar em fogo brando, sem mexer. Acrescente os cravos da índia para dar um aroma especial à cocada.",
        "Depois de cerca de 20-23 minutos, a calda estará em ponto de caramelo. Neste momento acrescente o coco ralado, misturando bem para envolver todos os pedacinhos de coco nesta calda.",
        "Cozinhe bem essa cocada em fogo brando, mexendo sempre para não queimar e até que comece a se soltar do fundo da panela. Acrescente o leite condensado e misture tudo.",
        "Cozinhe por mais 5-7 minutos em fogo brando, mexendo sempre, até que fique bem cremoso e soltando do fundo da panela.",
        "Numa superfície forrada com papel manteiga ou numa forma untada com manteiga, acomode separadamente colheradas da cocada e deixe-as esfriarem, para ficarem mais firmes.",
        "Depois de esfriarem, retire as cocadas e já pode se deliciar com este doce típico baiano! \r\nDica: como armazenar cocada? Não conserve as cocadas em geladeira para que não percam a textura cremosa. Se quiser",
        "embrulhe-as uma a uma em papel celofane ou filme plástico",
        "guarde dentro de um recipiente com tampa e deixe-as em temperatura ambiente por até 3 dias. , Esperamos que tenha apreciado essa deliciosa receita de cocada morena baiana. Deixe em baixo seus comentários e bom apetite!"
      ],
      "time": "45min",
      "level": "moderate",
      "rate": 0,
      "image": "https://t2.rg.ltmcdn.com/pt/posts/3/0/3/cocada_morena_baiana_10303_600.jpg"
    },
    {
      "category": "sobremesa",
      "title": "Brigadeiro gourmet de churros",
      "description": "Que tal relembrar os tempos da infância quando a gente corria para pedir um churros na carrocinha, só porque aquele perfume inconfundível de canela e doce de leite vinha pelo ar?Se tem uma coisa que me remete à leveza da infância é o sabor do churros e hoje em dia, para a alegria de quem ama este queridinho, foram criadas as mais variadas formas de se apresentar o churros : CupCake de churros, bolo de churros e o queridíssimo das festas, o brigadeiro gourmet de churros.A receita de brigadeiro de churros varia de confeiteiro para confeiteiro, mas eu quero ensinar uma receita que é muito prática e tenho certeza que todo mundo na sua casa vai amar!",
      "ingredients": [
        "395 gramas de leite condensado (1 lata)",
        "3 colheres de sopa de creme de leite",
        "3 colheres de sopa de doce de leite",
        "1 xícara de açúcar demerara",
        "1 colher de sopa de canela em pó"
      ],
      "preparation": [
        "Separe todos os ingredientes desta receita de docinho de churros: o leite condensado, o creme de leite, o doce de leite, o açúcar e a canela.",
        "Em uma panela misture o creme de leite e o leite condensado e leve em fogo baixo, mexendo sempre com a ajuda de uma espátula de silicone.",
        "Mexa até que se forme uma massa cremosa que desprende do fundo da panela, como na foto. Desligue o fogo.",
        "Coloque a massa desse brigadeiro em um prato e deixe esfriar por completo.",
        "Enquanto isso, prepare uma manga de confeitar com um bico pitanga pequeno. Dentro dele coloque o doce de leite.",
        "Misture o açúcar demerara e a canela e um prato. É nesta mistura que iremos passar o brigadeiro para reforçar o sabor de churros!",
        "Após a massa esfriar bem, faça as bolinhas de brigadeiro do tamanho desejado e passe",
        "Sirva os brigadeiros em pelotines (forminhas de papel)!",
        "O brigadeiro sabor churros está na categoria gourmet por ser especial! Não hesite em preparar este brigadeiro de churros para deliciar todo o mundo em uma festinha ou simplesmente para fazer um agrado a si mesmo/a ou à família. Bom apetite!"
      ],
      "time": "1h 30min",
      "level": "moderate",
      "rate": 0,
      "image": "https://t1.rg.ltmcdn.com/pt/posts/2/1/2/brigadeiro_gourmet_de_churros_10212_600.jpg"
    },
    {
      "category": "sobremesa",
      "title": "Pavê de bombom Sonho de Valsa",
      "description": "Pavê é uma daquelas receitas clássicas que não podem faltar nas reuniões familiares, não é mesmo? Por isso, é a sobremesa ideal para celebrar a Páscoa!Nessa receita de pavê de bombom Sonho de Valsa acrescentamos muito chocolate, justamente para celebrar essa data tão especial. Sem dúvidas que esta sobremesa gelada vai rivalizar com as demais sobremesas de Páscoa e ninguém vai resistir a provar!",
      "ingredients": [
        "1 lata de leite condensado",
        "2 latas de leite (medida da lata do leite condensado)",
        "2 colheres de sopa de amido de milho",
        "1 caixa de creme de leite",
        "1 colher de chá de essência de baunilha",
        "10 bombons Sonho de Valsa",
        "150 gramas de chocolate meio amargo em barra"
      ],
      "preparation": [
        "Corte os bombons Sonho de Valsa em fatias e reserve. Eles serão usados na montagem e na decoração desta sobremesa de Páscoa.",
        "Misture as gemas com 1 lata do leite e o amido. Reserve.",
        "Leve ao fogo médio o leite condensado e 1 lata de leite. Mexa de vez em quando, até esquentar sem ferver.",
        "Sem parar de mexer, acrescente a mistura reservada (de gemas, leite e amido) e continue mexendo bem até ferver e engrossar.",
        "Desligue o fogo, coloque a baunilha e 3/4 do creme de leite. Misture bem e transfira metade do creme para uma vasilha. Reserve para esfriar.",
        "Leve 100 g do chocolate picado e o restante do creme de leite ao microondas em potência alta por 30 segundos. Mexa e devolva ao microondas por mais 2 vezes, com 15 segundos de tempo cada vez. Desse jeito conseguirá uma ganache de chocolate.",
        "Para montar o doce, utilize uma travessa e faça camadas de creme, ganache de chocolate e bombons. Finalize com bombons e o restante do chocolate picado. Leve à geladeira por, pelo menos, 1 hora e sirva a seguir."
      ],
      "time": "1h 30min",
      "level": "moderate",
      "rate": 0,
      "image": "https://t2.rg.ltmcdn.com/pt/posts/6/0/0/pave_de_bombom_sonho_de_valsa_10006_600.jpg"
    }
  ]
  const connectionDb = async () => {
    try {
        mongoose.set('strictQuery', false);
        const connection = await mongoose.connect(process.env.MONGODB_URI)
        console.log("Connected to DB: ", connection.connections[0].name);
    } catch (error) {
        console.error("Database connection error: ", error);
    }
}

  const seedDb = async () => {
    try {
      mongoose.set('strictQuery', false);
        await mongoose.connect(process.env.MONGODB_URI)

        await Recipe.insertMany(recipes)
        console.log ("congrats")
    } catch (error) {
        console.log (error)
        
    }
  }

  module.exports = seedDb