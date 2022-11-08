### Cronograma de atividades - gantt

* Projeto integrador I

```mermaid
gantt
    title Sistema de Economia de Energia
    dateFormat  YYYY-MM-DD

    section Planejamento
    Tema                :a1, 2022-10-24, 7d
    Definição           :a2, after a1, 7d

    section Requisitos
    Problemas           :b1, after a2  , 7d
    Tecnologias         :b2, after b1  ,7d

    section Documentação
    Teoria         :c1, after b2, 14d
    Desenvolvimento      :c2, after c1, 14d
    Conclusão       :c3, after c2, 14d

    section Execução
    Protótipo           :d1, after c3, 14d
    Testes              :d2, after d1, 7d

    section Defesa
    Apresentação        :e1, after d2, 7d
```