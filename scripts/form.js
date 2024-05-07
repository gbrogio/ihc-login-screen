function formatNumber(num) {
  return num < 10 ? '0' + num : num.toString();
}

const codes = (name, email) => `
/*
Author..: ${name.toUpperCase} <${email}>
Date......: 05-07-2024
OB..........: Calcula o desconto do INSS com base no salário do funcionário.
*/

#include <stdio.h>

int main() {
    printf("==== Calculadora de desconto do INSS ====\\n\\n");

    float salario, desconto_inss;

    // Solicitar salário ao usuário
    printf("Digite o salário do funcionário: ");
    scanf("%f", &salario);

    // Calcular desconto do INSS
    if (salario <= 1570.00) {
        desconto_inss = salario * 0.08; // 8%
    } else {
        desconto_inss = salario * 0.09; // 9%
    }

    // Exibir desconto do INSS
    printf("O desconto do INSS será de R$ %.2f\\n", desconto_inss);

    return 0;
}
--------------------------------------------------------------------------------
/*
Author..: ${name.toUpperCase} <${email}>
Date....: 05-07-2024
OB......: Verifica se os números digitados pelo usuário são divisíveis por 2 ou 3.
*/

#include <stdio.h>

int main() {
    int num1, num2, num3, num4;
    printf("==== Números Divisíveis por 2 ou 3 ====\\n\\n");
    printf("Digite um número: ");
    scanf("%d", &num1);
    printf("Digite outro número: ");
    scanf("%d", &num2);
    printf("Digite um outro número: ");
    scanf("%d", &num3);
    printf("Agora digite mais um último número: ");
    scanf("%d", &num4);

    printf("Números divisíveis por 2 ou 3: ");
    if (num1 % 2 == 0 || num1 % 3 == 0) printf("%d ", num1);
    if (num2 % 2 == 0 || num2 % 3 == 0) printf("%d ", num2);
    if (num3 % 2 == 0 || num3 % 3 == 0) printf("%d ", num3);
    if (num4 % 2 == 0 || num4 % 3 == 0) printf("%d ", num4);
    printf("\\n");

    return 0;
}
--------------------------------------------------------------------------------
/*
Author..: ${name.toUpperCase} <${email}>
Date....: 05-07-2024
OB......: Calcula o prêmio de Natal com base no número de horas extras e faltas de um funcionário.
*/

#include <stdio.h>

int main() {
    float horas_extras, horas_faltas;
    printf("==== Gratificação de Natal ====\\n\\n");
    printf("Digite o número de horas extras: ");
    scanf("%f", &horas_extras);
    printf("Agora o número de horas faltas: ");
    scanf("%f", &horas_faltas);

    float h = horas_extras - horas_faltas;
    float premio;

    if (h < 0) {
        premio = 0.00;
    } else if (h <= 10) {
        premio = 20.00;
    } else if (h <= 20) {
        premio = 40.00;
    } else if (h <= 30) {
        premio = 60.00;
    } else if (h <= 40) {
        premio = 80.00;
    } else {
        premio = 100.00;
    }

    printf("O valor do prêmio de Natal é R$ %.2f\\n", premio);

    return 0;
}
--------------------------------------------------------------------------------
/*
Author..: ${name.toUpperCase} <${email}>
Date....: 05-07-2024
OB......: Calcula a gratificação de um funcionário com base na quantidade de peças vendidas.
*/

#include <stdio.h>

int main() {
    char nome[50];
    float salario, gratificacao = 0;
    int pecas_vendidas;

    printf("==== Gratificação por Peças Vendidas ====\\n\\n");
    printf("Digite o nome do funcionário: ");
    scanf(" %[^\\n]s", nome);
    printf("Digite o salário mensal do funcionário: ");
    scanf("%f", &salario);
    printf("Digite a quantidade de peças vendidas: ");
    scanf("%d", &pecas_vendidas);

    if (pecas_vendidas <= 30) {
        // sem gratificação
    } else if (pecas_vendidas <= 60) {
        gratificacao = salario * 0.10;
    } else if (pecas_vendidas <= 100) {
        gratificacao = salario * 0.15;
    } else if (pecas_vendidas <= 150) {
        gratificacao = salario * 0.20;
    } else {
        gratificacao = salario * 0.30;
    }

    printf("Funcionário %s, gratificação R$ %.2f, salário total R$ %.2f\\n", nome, gratificacao, salario + gratificacao);

    return 0;
}
--------------------------------------------------------------------------------
/*
Author..: ${name.toUpperCase} <${email}>
Date....: 05-07-2024
OB......: Calcula o desconto na mensalidade do clube com base no sexo e idade do associado.
*/

#include <stdio.h>

int main() {
    char nome_associado[50];
    int idade;
    char sexo;
    float mensalidade, desconto;

    printf("==== Desconto na Mensalidade do Clube ====\\n\\n");
    printf("Digite o nome do associado: ");
    scanf(" %[^\\n]s", nome_associado);
    printf("Digite a idade do associado: ");
    scanf("%d", &idade);
    printf("Digite o sexo do associado (M/F): ");
    scanf(" %c", &sexo);
    printf("Digite o valor da mensalidade: ");
    scanf("%f", &mensalidade);

    if ((sexo == 'F' || sexo == 'f') && idade <= 30) {
        desconto = mensalidade * 0.20;
    } else if ((sexo == 'F' || sexo == 'f') && idade <= 40) {
        desconto = mensalidade * 0.30;
    } else if ((sexo == 'F' || sexo == 'f') && idade > 40) {
        desconto = mensalidade * 0.35;
    } else if ((sexo == 'M' || sexo == 'm') && idade > 25) {
        desconto = mensalidade * 0.25;
    } else {
        desconto = 0;
    }

    printf(
        "Nome: %s, Idade: %d, Mensalidade a pagar: R$ %.2f\\nDesconto: R$ %.2f\\n", 
        nome_associado, idade, mensalidade, desconto
    );

    return 0;
}
--------------------------------------------------------------------------------
/*
Author..: ${name.toUpperCase} <${email}>
Date....: 05-07-2024
OB......: Verifica se um número inteiro digitado pelo usuário é par ou ímpar.
*/

#include <stdio.h>

int main() {
    int num;
    printf("==== Par ou Ímpar ====\\n\\n");
    printf("Digite um número inteiro: ");
    scanf("%d", &num);

    if (num % 2 == 0) {
        printf("%d é par.\\n", num);
    } else {
        printf("%d é ímpar.\\n", num);
    }

    return 0;
}
--------------------------------------------------------------------------------
/*
Author..: ${name.toUpperCase} <${email}>
Date....: 05-07-2024
OB......: Ordena três números inteiros digitados pelo usuário em ordem crescente.
*/

#include <stdio.h>

int main() {
    int a, b, c;

    printf("==== Ordenar Números ====\\n\\n");
    printf("Digite um número:");
    scanf("%d", &a);
    printf("Digite outro número:");
    scanf("%d", &b);
    printf("Digite mais um número:");
    scanf("%d", &c);

    if (a > b) {
        int temp = a;
        a = b;
        b = temp;
    }
    if (a > c) {
        int temp = a;
        a = c;
        c = temp;
    }
    if (b > c) {
        int temp = b;
        b = c;
        c = temp;
    }

    printf("Números em ordem crescente: %d, %d, %d\\n", a, b, c);

    return 0;
}
--------------------------------------------------------------------------------
/*
Author..: ${name.toUpperCase} <${email}>
Date....: 05-07-2024
OB......: Calcula o salário líquido de um funcionário, considerando o salário bruto, prêmio, e descontos do INSS e IR.
*/

#include <stdio.h>

int main() {
    float salario_bruto, premio, base_inss, base_ir, taxa_inss, taxa_ir;
    float rendimento, desconto_inss, desconto_ir, salario_liquido;

    printf("==== Demonstrativo de Pagamento ====\\n\\n");
    printf("Digite o salário bruto: ");
    scanf("%f", &salario_bruto);
    
    printf("Digite o prêmio: ");
    scanf("%f", &premio);
    
    printf("Digite a base do INSS: ");
    scanf("%f", &base_inss);
    
    printf("Digite a base do IR: ");
    scanf("%f", &base_ir);
    
    printf("Digite a taxa do INSS: ");
    scanf("%f", &taxa_inss);
    
    printf("Digite a taxa do IR: ");
    scanf("%f", &taxa_ir);

    // Calcule o rendimento
    rendimento = salario_bruto + premio;

    // Verifique se o desconto do INSS é aplicável
    if (rendimento > base_inss) {
        desconto_inss = (rendimento - base_inss) * taxa_inss;
    } else {
        desconto_inss = 0.0;
    }

    // Verifique se o desconto do IR é aplicável
    if (rendimento - desconto_inss > base_ir) {
        desconto_ir = ((rendimento - desconto_inss) - base_ir) * taxa_ir;
    } else {
        desconto_ir = 0.0;
    }

    // Calcule o salário líquido
    salario_liquido = rendimento - desconto_inss - desconto_ir;

    printf("Salário bruto: R$ %.2f\\n", salario_bruto);
    printf("Prêmio: R$ %.2f\\n", premio);
    printf("Rendimento: R$ %.2f\\n", rendimento);
    printf("Desconto INSS: R$ %.2f\\n", desconto_inss);
    printf("Desconto IR: R$ %.2f\\n", desconto_ir);
    printf("Salário líquido: R$ %.2f\\n", salario_liquido);

    return 0;
}
--------------------------------------------------------------------------------
/*
Author..: ${name.toUpperCase} <${email}>
Date....: 05-07-2024
OB......: Identifica se um número inteiro positivo digitado pelo usuário é par, ímpar e/ou múltiplo de 3, 5 ou 7.
*/

#include <stdio.h>

int main() {
    int numero;

    printf("==== Identificar Números ====\\n\\n");
    printf("Digite um número inteiro positivo: ");
    scanf("%d", &numero);

    if (numero % 2 == 0) {
        printf("%d é par.\\n", numero);
    } else {
        printf("%d é ímpar.\\n", numero);
    }

    if (numero % 3 == 0) {
        printf("%d é múltiplo de 3.\\n", numero);
    }

    if (numero % 5 == 0) {
        printf("%d é múltiplo de 5.\\n", numero);
    }

    if (numero % 7 == 0) {
        printf("%d é múltiplo de 7.\\n", numero);
    }

    return 0;
}
--------------------------------------------------------------------------------
/*
Author..: ${name.toUpperCase} <${email}>
Date....: 05-07-2024
OB......: Verifica se um aluno foi aprovado ou reprovado com base em suas quatro notas.
*/

#include <stdio.h>

int main() {
    float nota1, nota2, nota3, nota4;
    printf("==== Verificar Aprovação ====\\n\\n");
    printf("Digite a primeira nota: ");
    scanf("%f", &nota1);
    printf("Digite a segunda nota: ");
    scanf("%f", &nota2);
    printf("Digite a terceira nota: ");
    scanf("%f", &nota3);
    printf("Digite a quarta nota: ");
    scanf("%f", &nota4);
    

    float media = (nota1 + nota2 + nota3 + nota4) / 4;
    if (media >= 7.0) {
        printf("Aluno aprovado!\\n");
    } else {
        printf("Aluno reprovado!\\n");
    }

    return 0;
}
`.split('--------------------------------------------------------------------------------');


document.getElementById('codes').addEventListener('submit', (ev) => {
  ev.preventDefault();

  const { 
    name: { value: name },
    email: { value: email },
    ra: { value: ra },
  } = ev.currentTarget;

   // Get the string content from the HTML element
   const blobs = codes(name, email).map((content) => new Blob([content], { type: "text/plain" }));
  
   // Create a new ZIP file
   const zip = new JSZip();
   blobs.forEach((blob, i) => {
    zip.file(`ESW1A_RA${ra.split('-')[0].substring(0, 6)}_EX${formatNumber(i)}.txt`, blob);
   })
 
   // Generate the ZIP file contents
   zip.generateAsync({ type: "blob" }).then(function(content) {
       // Create a new URL object from the Blob
       const url = URL.createObjectURL(content);
 
       // Create a new anchor element
       const a = document.createElement("a");
       a.href = url;
       a.download = "test.zip"; // Set the download file name
 
       // Append the anchor element to the document body
       document.body.appendChild(a);
 
       // Click the anchor element to trigger the download
       a.click();
 
       // Remove the anchor element from the document body
       document.body.removeChild(a);
 
       // Revoke the URL object to free up resources
       URL.revokeObjectURL(url);
   });
  
})