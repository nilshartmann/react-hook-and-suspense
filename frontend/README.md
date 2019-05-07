# React Hooks and Suspense Demo (Live Coding) Playground

Zeigen:

0. Zeigen der Anwendung

0a. Mögliche Probleme bisher:

- this-Binding
- Logik verteilt:
  - auf unterschiedliche Komponenten (CompSearch + PersonSearch)
  - in unterschiedliche Lifecycle-Methoden verteilt (ComponentSearch)

1. setState Hook am SearchInput demonstrieren
2. useInput erzeugen

3. useEffect in CompanySearch

4. Code-Splitting mit Supsense (umstellen in mainJS)

5. Ausblick: Data-Loading mit Supsense (in LazyApp.js import umstellen)

```
PersonsResource.read(props.searchPhrase)
CompaniesResource.read(props.searchPhrase);
```
