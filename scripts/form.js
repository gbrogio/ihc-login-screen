function formatNumber(num) {
  return num < 10 ? `0${num}` : num.toString();
}

const codes = (name, email) => `
/*
Author..: ${name.toUpperCase()} ${email ? `<${email}>` : ''}
Date......: 10/05/2024
OB..........: Imprimir os valores ímpares entre 0 e 20.
*/

#include <stdio.h>

int main() {
    int i;

    printf("==== Imprimir os valores ímpares entre 0 e 20 ====\n");

    printf("Valores ímpares entre 0 e 20:\n");
    for (i = 0; i <= 20; i++) {
        if (i % 2 != 0) {
            printf("%d\n", i);
        }
    }

    return 0;
}
--------------------------------------------------------------------------------
/*
Author..: ${name.toUpperCase()} ${email ? `<${email}>` : ''}
Date......: 10/05/2024
OB..........: Imprimir os números divisíveis por 4 menores que 200.
*/

#include <stdio.h>

int main() {
    int contador = 1;

    printf("==== Imprimir os números divisíveis por 4 menores que 200 ====\n");

    printf("Números divisíveis por 4 menores que 200:\n");
    while (contador < 200) {
        if (contador % 4 == 0) {
            printf("%d\n", contador);
        }
        contador++;
    }

    return 0;
}
--------------------------------------------------------------------------------
/*
Author..: ${name.toUpperCase()} ${email ? `<${email}>` : ''}
Date......: 10/05/2024
OB..........: Contar e imprimir o total de valores negativos inseridos pelo usuário.
*/

#include <stdio.h>

int main() {
    int a, i, countNegativos = 0;

    printf("==== Contar e imprimir o total de valores negativos inseridos pelo usuário ====\n");

    for (i = 0; i < 5; i++) {
        printf("Digite o valor de a: ");
        scanf("%d", &a);

        if (a < 0) {
            countNegativos++;
        }
    }

    printf("Total de valores negativos: %d\n", countNegativos);

    return 0;
}
--------------------------------------------------------------------------------
/*
Author..: ${name.toUpperCase()} ${email ? `<${email}>` : ''}
Date......: 10/05/2024
OB..........: Exibir a tabuada de um número inserido pelo usuário.
*/

#include <stdio.h>

int main() {
    int n, i, j;

    printf("==== Exibir a tabuada de um número inserido pelo usuário ====\n");

    for (i = 0; i < 20; i++) {
        printf("Digite um valor para n: ");
        scanf("%d", &n);

        printf("Tabuada de %d:\n", n);
        for (j = 1; j <= n; j++) {
            printf("%d x %d = %d\n", j, n, j * n);
        }
    }

    return 0;
}
--------------------------------------------------------------------------------
/*
Author..: ${name.toUpperCase()} ${email ? `<${email}>` : ''}
Date......: 10/05/2024
OB..........: Calcular e exibir o somatório das fatoriais de 15 valores inseridos pelo usuário.
*/

#include <stdio.h>

int main() {
    int valores[15];
    int i, j, fatorial, somatorio = 0;

    printf("==== Calcular e exibir o somatório das fatoriais de 15 valores inseridos pelo usuário ====\n");

    // Lendo os 15 valores
    for (i = 0; i < 15; i++) {
        printf("Digite o valor %d: ", i + 1);
        scanf("%d", &valores[i]);

        // Calculando a fatorial do valor lido
        fatorial = 1;
        for (j = 1; j <= valores[i]; j++) {
            fatorial *= j;
        }

        // Somando ao somatório
        somatorio += fatorial;
    }

    // Exibindo o resultado
    printf("O somatório das fatoriais dos 15 valores é: %d\n", somatorio);

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

   const blobs = codes(name, email).map((content) => new Blob([content], { type: "text/plain" }));
  
   const zip = new JSZip();
   blobs.forEach((blob, i) => {
    zip.file(`ESW1A_RA${ra.split('-')[0].substring(0, 6)}_EX${formatNumber(i+1)}.c`, blob);
   })

   zip.generateAsync({ type: "blob" }).then((content) => {
       const url = URL.createObjectURL(content);
       const a = document.createElement("a");
       a.href = url;
       a.download = "codes.zip"; // Set the download file name
       document.body.appendChild(a);
       a.click();
       document.body.removeChild(a);
       URL.revokeObjectURL(url);
   });
  
})