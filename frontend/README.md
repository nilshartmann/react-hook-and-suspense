# React Hooks and Suspense Demo (Live Coding) Playground

Zeigen:

0. Zeigen der Anwendung

1. setState Hook am SearchInput demonstrieren

2a. setState und useEffect an CompanySearch demonstrieren
2b. useSearch-Hook extrahieren
2c. useSearch-Hook in PersonSearch einbauen

3. Still a Problem: Loading indicator...

Weitermachen in `search_suspense`, Code nur zeigen, aber nicht schreiben

3a. useEffect und setState durch Suspense und React Caching ersetzen

```
PersonsResource.read(props.searchPhrase)
CompaniesResource.read(props.searchPhrase);
```

4. Durch Verschieben der React.Suspense Komponente können wir steuern, wo Loading Indikatoren angezeigt werden
