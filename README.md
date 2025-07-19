# Performance-Test und Lastanalyse des Tricentis Demo Web Shop mittels Apache JMeter

![Build Status](https://gitlab.com/dein-gitlab-username/jmeter_performance_tests/-/badges/main/pipeline.svg)
Dieses Projekt dokumentiert eine umfassende Performance-Testreihe, die auf dem Tricentis Demo Web Shop (`https://demowebshop.tricentis.com/`) durchgeführt wurde. Als primäres Testwerkzeug kam Apache JMeter zum Einsatz. Ziel war es, die Leistungsfähigkeit der Anwendung unter verschiedenen Lastszenarien zu bewerten und potenzielle Engpässe sowie Grenzen der Skalierbarkeit zu identifizieren.

## Inhaltsverzeichnis

1.  [Einleitung](#1-einleitung)
2.  [Testobjekt](#2-testobjekt-tricentis-demo-web-shop)
3.  [Testziele und -strategie](#3-testziele-und--strategie)
4.  [Testumgebung](#4-testumgebung)
5.  [Testfall-Spezifikationen und -Ergebnisse](#5-testfall-spezifikationen-und--ergebnisse)
6.  [Gesamtschlussfolgerung](#6-gesamtschlussfolgerung)
7.  [Empfehlungen](#7-empfehlungen)

---

### **1. Einleitung**

Performance-Tests sind ein entscheidender Bestandteil der Softwarequalitätssicherung. Sie bewerten die Reaktionsfähigkeit, Stabilität, Skalierbarkeit und Ressourcennutzung einer Anwendung unter einer bestimmten Arbeitslast. Ziel ist es, Engpässe zu identifizieren und sicherzustellen, dass die Anwendung die Leistungsanforderungen der Benutzer und Geschäftsprozesse erfüllt.

**Begriffsdefinitionen:**

* **Performance-Test (Leistungstest):** Ein Überbegriff für Tests, die die Leistungsfähigkeit einer Anwendung unter verschiedenen Lastbedingungen bewerten.
* **Lasttest (Load Test):** Untersucht das Verhalten einer Anwendung unter einer erwarteten oder realistischen Benutzerlast, um die Stabilität und Fähigkeit zur Bewältigung dieser Last zu überprüfen.
* **Stresstest (Stress Test):** Ermittelt die Belastungsgrenze eines Systems, indem die Last über die normale Kapazität hinaus erhöht wird, um den Breakpoint und das Verhalten bei Überlastung zu finden.
* **Spike-Test (Spike Test):** Simuliert plötzliche, extreme Lastspitzen, um die Fähigkeit des Systems zu testen, sich von abrupten, kurzzeitigen Belastungen zu erholen.
* **Dauertest (Soak Test / Endurance Test):** Eine Anwendung wird über einen längeren Zeitraum einer konstanten Last ausgesetzt, um Speicherlecks oder andere langfristige Performance-Degradationen zu erkennen.
* **Skalierbarkeitstest (Scalability Test):** Untersucht, wie sich die Leistung einer Anwendung verändert, wenn die Benutzerlast erhöht wird oder wenn Ressourcen hinzugefügt/entfernt werden.

### **2. Testobjekt: Tricentis Demo Web Shop**

Der Tricentis Demo Web Shop ist eine öffentlich zugängliche E-Commerce-Demo-Anwendung, die für Testzwecke bereitgestellt wird. Er bietet Standardfunktionen eines Webshops wie Benutzerregistrierung, Login, Produktkatalog, Warenkorb und Checkout.

* **URL:** `https://demowebshop.tricentis.com/`
* **Zweck im Projekt:** Dient als Zielsystem zur Demonstration von Performance-Testmethoden mit Apache JMeter.

### **3. Testziele und -strategie**

Das übergeordnete Ziel dieses Projekts war es, die Leistungsfähigkeit des Tricentis Demo Web Shops unter verschiedenen Lastszenarien zu analysieren und potenzielle Engpässe sowie Grenzen der Skalierbarkeit zu identifizieren.

**Allgemeine Leistungsindikatoren (KPIs):**

* **Antwortzeit (Response Time):** Die Zeit, die der Server benötigt, um auf eine Anfrage zu antworten. Gemessen in Millisekunden (ms).
    * **Durchschnitt (Average):** Mittlere Antwortzeit.
    * **Median:** Der Wert, der die obere und untere Hälfte der Antwortzeiten teilt.
    * **90./95./99. Perzentil:** Zeigt die Antwortzeit, unter der x% aller Anfragen abgeschlossen wurden. Wichtig, um Ausreißer zu erkennen.
* **Durchsatz (Throughput):** Anzahl der Transaktionen (Anfragen) pro Zeiteinheit (z.B. Anfragen pro Sekunde).
* **Fehlerrate (Error %):** Prozentsatz der fehlgeschlagenen Anfragen (z.B. HTTP 5xx Serverfehler, Timeouts).
* **APDEX (Application Performance Index):** Ein Maß für die Benutzerzufriedenheit basierend auf vordefinierten Schwellenwerten für tolerierbare und frustrierende Antwortzeiten (0: sehr frustrierend, 1: sehr zufrieden).

**Teststrategie:**
Es wurden sieben spezifische Testfälle definiert, um verschiedene Aspekte der Anwendungsleistung unter Last zu beleuchten:

1.  **Spike-Test:** Sofortige, hohe Lastspitze auf die Startseite.
2.  **Lasttest:** Konstante, erwartete Last auf die Startseite.
3.  **Stresstest:** Extreme Last auf den Registrierungsprozess.
4.  **Lasttest:** Konstante Last auf den Produktseiten-Navigationsfluss.
5.  **Lasttest:** Konstante Last auf den Login-Logout-Prozess.
6.  **Dauertest:** Langzeit-Belastung zur Erkennung von Stabilitätsproblemen.
7.  **Skalierbarkeitstest:** Schrittweise Erhöhung der Last, um Skalierungsgrenzen zu finden.

### **4. Testumgebung**

* **Test-Client:** Lokaler Workstation (Laptop/PC)
    * **Betriebssystem:** Windows [Deine Windows-Version einfügen, z.B. 10/11]
    * **Java-Version:** [Füge hier die Ausgabe von `java -version` ein, z.B. OpenJDK 11.0.11]
* **Test-Tool:** Apache JMeter `5.6.3`
* **Getestete Anwendung:** Tricentis Demo Web Shop (`https://demowebshop.tricentis.com/`)
* **Testdaten:** Generierte CSV-Dateien für eindeutige Benutzerdaten (für Registrierungstests), erstellt mit einem Java-Programm.

### **5. Testfall-Spezifikationen und -Ergebnisse**

Alle Tests wurden im **Non-GUI-Modus** von JMeter durchgeführt, um eine optimale Ressourcennutzung und präzise Ergebnisse zu gewährleisten. Für jeden Testfall wurden die `.jtl`-Ergebnisdateien generiert und daraus anschließend HTML-Reports erstellt.

---

#### **Testfall 1: Spike-Test - Startseite laden**

* **Ziel des Testfalls:** Untersuchung der Systemreaktion auf eine plötzliche, extreme Lastspitze beim Aufruf der Startseite.
* **JMeter-Konfiguration (`1_Spike_Test_Homepage_200Users` - `jp@gc - Stepping Thread Group`):**
    * **Anzahl der Basis-Threads:** 100
    * **Zusätzliche Threads für Spike:** 200 (Totaler Peak 300 Threads)
    * **Ramp-up Time (Spike):** 5 Sekunden
    * **Haltezeit (Peak):** 30 Sekunden
    * **Aktionen pro Benutzer:** Startseite laden (`GET /`)
    * **Loop Count:** Unendlich
    * **Timer:** Constant Timer (100 ms)

* **Ergebnisse (Auszug aus HTML-Report):**
    * **Testdauer:** ca. 40 Sekunden
    * **`#Samples`:** 704
    * **`Error %`:** 0.00%
    * **`Average (ms)`:** 5756.00 ms (ca. 5.76 Sekunden)
    * **`90th pct (ms)`:** 10891.70 ms (ca. 10.89 Sekunden)
    * **`Max (ms)`:** 22275 ms (ca. 22.27 Sekunden)
    * **`Throughput`:** 17.62 transactions/s
    * **`APDEX`:** 0.023

    ![Testfall 1 Statistiken](link_zu_tf1_stats_screenshot.png)
    * **Interpretation:**
    Der Spike-Test zeigt, dass der Tricentis Demo Web Shop unter einer plötzlichen Lastspitze von bis zu 300 gleichzeitigen Benutzern beim Laden der Startseite **stabil bleibt (0% Fehler)**. Das System bricht nicht zusammen. Allerdings sind die Antwortzeiten mit einem **Durchschnitt von 5.76 Sekunden** und Spitzenwerten von über 22 Sekunden **inakzeptabel hoch**. Der extrem niedrige APDEX-Wert von $0.023$ bestätigt eine sehr schlechte Benutzererfahrung. Dies deutet darauf hin, dass die Anwendung bereits bei einer geringeren Last gesättigt ist und der Spike diese Überlastung lediglich bestätigt, anstatt einen Bruch herbeizuführen.

---

#### **Testfall 2: Lasttest - Startseite laden**

* **Ziel des Testfalls:** Bewertung der Leistung der Startseite unter einer konstanten, erwarteten Benutzerlast.
* **JMeter-Konfiguration (`2_Lasttest_Homepage_100Users` - `Thread Group`):**
    * **Anzahl der Threads (Benutzer):** 100
    * **Ramp-up period:** 60 Sekunden
    * **Aktionen pro Benutzer:** Startseite laden (`GET /`)
    * **Loop Count:** Unendlich
    * **Timer:** Constant Timer (100 ms)

* **Ergebnisse (Auszug aus HTML-Report):**
    * **Testdauer:** ca. 17 Minuten
    * **`#Samples`:** 17423
    * **`Error %`:** 0.00%
    * **`Average (ms)`:** 5735.07 ms (ca. 5.73 Sekunden)
    * **`90th pct (ms)`:** 6784.60 ms (ca. 6.78 Sekunden)
    * **`Max (ms)`:** 16210 ms (ca. 16.21 Sekunden)
    * **`Throughput`:** 16.58 transactions/s
    * **`APDEX`:** 0.011

    ![Testfall 2 Statistiken](link_zu_tf2_stats_screenshot.png)
    * **Interpretation:**
    Dieser Lasttest bestätigt die Erkenntnisse aus dem Spike-Test. Selbst unter einer "normalen" Last von 100 gleichzeitigen Benutzern ist die Startseite **massiv überlastet**. Die durchschnittliche Antwortzeit von **5.73 Sekunden** liegt weit über jedem akzeptablen Wert (z.B. einem Ziel von 1.5 Sekunden). Trotz $0\%$ Fehlern ist die Benutzererfahrung aufgrund der langen Wartezeiten extrem schlecht (APDEX $0.011$). Das System scheint bereits bei dieser Last an seine Kapazitätsgrenze zu stoßen.

---

#### **Testfall 3: Stresstest - Registrierung**

* **Ziel des Testfalls:** Ermittlung des maximalen Durchsatzes und des Breakpoints des Systems beim Registrierungsprozess unter extremer Schreiblast.
* **JMeter-Konfiguration (`3_Stresstest_Registrierung_500Users` - `Thread Group`):**
    * **Anzahl der Threads (Benutzer):** 500
    * **Ramp-up period:** 10 Sekunden (schneller Lastaufbau)
    * **Aktionen pro Benutzer:** Registrierungsfluss (`GET /register`, `POST /register`, `GET /registerresult`)
    * **Testdaten:** `CSV Data Set Config` mit 5000+ eindeutigen E-Mail-Adressen (von Java-Skript generiert), `Recycle on EOF: False`, `Stop thread on EOF: True`.
    * **Loop Count:** 1 (jeder Benutzer registriert sich nur einmal)
    * **Timer:** Constant Timer (100 ms)

* **Ergebnisse (Auszug aus HTML-Report):**
    * **Testdauer:** ca. 1 Minute
    * **`#Samples`:** 2500 (500 Registrierungsflüsse)
    * **`Error %`:** 0.00%
    * **`Average (ms) für den gesamten Registrierungs-Flow`:** 32971.30 ms (ca. 32.97 Sekunden)
    * **`90th pct (ms) für den Flow`:** 50341.40 ms (ca. 50.34 Sekunden)
    * **`Max (ms) für den Flow`:** 55564 ms (ca. 55.56 Sekunden)
    * **`Throughput (Flow)`:** 8.56 transactions/s
    * **`APDEX`:** 0.001

    ![Testfall 3 Statistiken](link_zu_tf3_stats_screenshot.png)
    * **Interpretation:**
    Der Stresstest für die Registrierung zeigt eine **massive Überlastung des Systems**. Obwohl durch die Verwendung eindeutiger Daten keine "User already exists"-Fehler auftraten und das System technisch $0\%$ HTTP-Fehler zurückgab, ist die durchschnittliche Zeit für einen vollständigen Registrierungsfluss **extrem hohe 32.97 Sekunden**. Dies ist für Benutzer **vollkommen inakzeptabel**. Die Anwendung erreicht hier ihren klaren Breakpoint; sie ist unter dieser Last zwar noch funktionsfähig, aber die Performance bricht dramatisch ein. Die Hauptengpässe liegen hier mutmaßlich in der Datenbankverarbeitung und der Anwendungsserver-Logik bei hohen Schreiblasten.

---

#### **Testfall 4: Lasttest - Produktseite besuchen**

* **Ziel des Testfalls:** Untersuchung der Leistung beim Aufruf von Produkt- und Kategorieseiten unter einer konstanten Benutzerlast.
* **JMeter-Konfiguration (`4_Lasttest_ProductPage_80Users` - `Thread Group`):**
    * **Anzahl der Threads (Benutzer):** 80
    * **Ramp-up period:** 45 Sekunden
    * **Aktionen pro Benutzer:** Navigieren zur Kategorie und dann zur Produktseite (`GET /computers`, `GET /build-your-own-computer`)
    * **Loop Count:** Unendlich
    * **Timer:** Constant Timer (200 ms)

* **Ergebnisse (Auszug aus HTML-Report):**
    * **Testdauer:** ca. 5-10 Minuten
    * **`#Samples`:** 7596
    * **`Error %`:** 0.00%
    * **`Average (ms) für den gesamten Produktseite Flow`:** 10045.13 ms (ca. 10.05 Sekunden)
    * **`90th pct (ms) für den Flow`:** 2682.40 ms (ca. 2.68 Sekunden)
    * **`Max (ms) für den Flow`:** 60236 ms (ca. 60.24 Sekunden)
    * **`Throughput (Flow)`:** 4.69 transactions/s
    * **`APDEX`:** 0.104

    ![Testfall 4 Statistiken](link_zu_tf4_stats_screenshot.png)
    * **Interpretation:**
    Der Lasttest der Produktseiten-Navigation offenbart ebenfalls **gravierende Leistungsprobleme**. Eine durchschnittliche Ladezeit von **über 10 Sekunden für den gesamten Navigationsfluss** ist