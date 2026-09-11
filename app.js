const questions = [
 {q:'1. Um gerente recebeu o escopo de um novo sistema e começou criando uma lista com “desenvolver tela”, “programar API”, “testar login” e “fazer deploy”. Qual é o principal problema?', options:['A lista é necessariamente uma WBS correta porque contém todo o trabalho.','A lista está no nível de atividades e mistura ações; falta estruturar o escopo hierarquicamente e orientado a entregas.','O problema é usar verbos; basta numerar as atividades.','A lista deveria começar pelo cronograma.'], a:1, c:'WBS não é uma lista de atividades. Primeiro estruture entregas e componentes do escopo; depois derive atividades para os work packages.'},
 {q:'2. Qual alternativa descreve melhor a regra dos 100%?', options:['Cada ramo deve ter exatamente 100 atividades.','A WBS deve conter todo o trabalho do projeto, e os filhos de cada elemento devem representar 100% do trabalho do pai.','Cada work package deve consumir 100% do orçamento.','Somente a raiz precisa representar 100% do escopo.'], a:1, c:'A regra vale em todos os níveis: sem lacunas, sem trabalho extra e com o roll-up de 100% do pai.'},
 {q:'3. Em uma WBS de software, “Módulo de Autenticação Implementado” é melhor candidato a work package do que “Implementar login”. Por quê?', options:['Porque work package nunca pode ter atividades.','Porque o primeiro descreve um resultado gerenciável; o segundo descreve uma ação.','Porque work package deve sempre ter uma duração exata.','Porque WBS só aceita substantivos sem adjetivos.'], a:1, c:'O foco é o resultado/entrega. Depois, o work package pode ser decomposto em atividades como implementar, testar e corrigir.'},
 {q:'4. Uma control account está acima de três work packages. Qual leitura está correta?', options:['A control account é uma atividade que antecede os work packages.','Os work packages são filhos da control account; ela é um ponto de controle gerencial.','A control account fica sempre abaixo do work package.','Control account e WBS Dictionary são a mesma coisa.'], a:1, c:'Control account é um ponto de gestão em que escopo, orçamento e cronograma podem ser integrados e medidos.'},
 {q:'5. Um diretor pede para adicionar “suporte permanente ao cliente” à WBS de um projeto de implantação que terminará após a entrada em produção. O melhor primeiro passo é:', options:['Adicionar imediatamente, pois suporte sempre ajuda o projeto.','Confirmar se o suporte permanente faz parte do escopo do projeto ou é operação contínua fora do projeto.','Transformar suporte em milestone.','Colocar suporte no WBS Dictionary e pronto.'], a:1, c:'Projetos são temporários. É preciso verificar a fronteira entre a transição/garantia do projeto e a operação contínua.'},
 {q:'6. Qual afirmação sobre profundidade da WBS está correta?', options:['Todos os ramos devem possuir o mesmo número de níveis.','Quanto mais níveis, melhor.','A profundidade deve ser adequada ao controle: decomponha até o nível suficientemente gerenciável, sem detalhamento artificial.','A WBS deve sempre parar no nível 3.'], a:2, c:'Não há profundidade universal. O critério é a necessidade de gestão, estimativa, atribuição, monitoramento e controle.'},
 {q:'7. Qual conjunto representa a Scope Baseline no modelo clássico?', options:['Project Charter + Schedule + Risk Register','Scope Statement + WBS + WBS Dictionary','WBS + Network Diagram + Cost Baseline','Requirements Register + Issue Log + WBS'], a:1, c:'A associação clássica é Scope Statement + WBS + WBS Dictionary.'},
 {q:'8. Depois de criar a WBS, uma equipe quer determinar quais ações serão executadas para produzir cada work package. Isso pertence principalmente a:', options:['Define Activities / planejamento das atividades','Criação do Project Charter','Controle de escopo somente','Criação do WBS Dictionary apenas'], a:0, c:'A WBS estrutura o escopo; o planejamento de atividades detalha as ações necessárias para produzir os work packages.'},
 {q:'9. Uma equipe diz que “a WBS está 100% completa” porque contém tudo o que o time técnico faz. O que ainda precisa ser verificado?', options:['Somente a duração de cada item.','Se também estão cobertos entregáveis externos, internos e de gestão que façam parte do escopo.','Se todos os itens têm a mesma duração.','Se cada item possui uma cor diferente.'], a:1, c:'O 100% se refere ao escopo do projeto, não apenas às tarefas do time técnico. O que estiver dentro do escopo deve estar representado.'},
 {q:'10. Qual é a melhor sequência conceitual?', options:['Atividades → WBS → Escopo → Cronograma','Escopo → WBS → Work Packages → Atividades → Duração/Dependências → Cronograma','Cronograma → WBS → Scope Statement','Control Account → Charter → WBS → Escopo'], a:1, c:'Essa sequência mantém a distinção entre estrutura do escopo e planejamento do cronograma.'}
];

function renderQuiz(){
 const box=document.getElementById('quizBox');
 box.innerHTML=questions.map((x,i)=>`<div class="question"><h3>${x.q}</h3>${x.options.map((o,j)=>`<label class="option"><input type="radio" name="q${i}" value="${j}"> ${String.fromCharCode(65+j)}) ${o}</label>`).join('')}</div>`).join('');
}
function correctQuiz(){
 let score=0; let answered=0; const review=document.getElementById('reviewBox');
 review.innerHTML='';
 questions.forEach((x,i)=>{
  const checked=document.querySelector(`input[name=q${i}]:checked`);
  const user=checked?Number(checked.value):null; if(user!==null) answered++; if(user===x.a) score++;
  const div=document.createElement('div'); div.className='review-item '+(user===x.a?'correct':'wrong');
  div.innerHTML=`<b>Questão ${i+1}: ${user===x.a?'✅ correta':'❌ incorreta / não respondida'}</b><p><strong>Resposta:</strong> ${String.fromCharCode(65+x.a)}) ${x.options[x.a]}</p><p>${x.c}</p>`; review.appendChild(div);
 });
 const s=document.getElementById('score'); s.hidden=false; s.textContent=`Resultado: ${score}/${questions.length} (${Math.round(score/questions.length*100)}%). Respondidas: ${answered}/${questions.length}.`;
 document.getElementById('gabarito').scrollIntoView({behavior:'smooth'});
}
document.getElementById('submitQuiz').addEventListener('click',correctQuiz);
document.getElementById('printBtn').addEventListener('click',()=>window.print());
renderQuiz();
