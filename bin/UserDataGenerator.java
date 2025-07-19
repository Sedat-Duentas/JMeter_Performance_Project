import java.io.FileWriter;
import java.io.IOException;
import java.io.BufferedWriter;

public class UserDataGenerator {

    // Konfiguration - Diese Variablen sind jetzt korrekt deklariert
    private static final int NUM_USERS = 5000; // Anzahl der zu generierenden Benutzer
    private static final String BASE_EMAIL = "performance_test_user_";
    private static final String EMAIL_DOMAIN = "@example.com";
    private static final String PASSWORD = "TestPass123!"; // Wähle ein sicheres Passwort, das den Anforderungen der Webseite entspricht
    private static final String OUTPUT_FILENAME = "unique_register_users.csv";

    public static void main(String[] args) {

        System.out.println("Generiere " + NUM_USERS + " Benutzerdaten und speichere sie in " + OUTPUT_FILENAME + "...");

        try (BufferedWriter writer = new BufferedWriter(new FileWriter(OUTPUT_FILENAME))) {
            for (int i = 1; i <= NUM_USERS; i++) {
                // Formatieren der Nummer mit führenden Nullen
                String userNumberStr;
                if (NUM_USERS < 10) { // Für 1-9 User
                    userNumberStr = String.format("%01d", i);
                } else if (NUM_USERS < 100) { // Für 10-99 User
                    userNumberStr = String.format("%02d", i);
                } else if (NUM_USERS < 1000) { // Für 100-999 User
                    userNumberStr = String.format("%03d", i);
                } else if (NUM_USERS < 10000) { // Für 1000-9999 User
                    userNumberStr = String.format("%04d", i);
                } else if (NUM_USERS < 100000) { // Für 10000-99999 User
                    userNumberStr = String.format("%05d", i);
                } else { // Für 100000+ User
                    userNumberStr = String.format("%06d", i); // Anpassbar für noch größere Zahlen
                }

                String email = BASE_EMAIL + userNumberStr + EMAIL_DOMAIN;
                writer.write(email + "," + PASSWORD);
                writer.newLine(); // Fügt einen Zeilenumbruch hinzu
            }
            System.out.println("Fertig! Datei " + OUTPUT_FILENAME + " wurde erfolgreich erstellt.");
        } catch (IOException e) {
            System.err.println("Fehler beim Schreiben der Datei: " + e.getMessage());
            e.printStackTrace();
        }
    }
}