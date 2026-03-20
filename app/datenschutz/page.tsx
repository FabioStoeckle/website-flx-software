import { Metadata } from "next";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung von FLX Software.",
};

export default function DatenschutzPage() {
  return (
    <Section className="pt-16 bg-black/30">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-8 text-4xl font-bold text-white">Datenschutzerklärung</h1>

        <div className="space-y-8 text-gray-300">
          <div>
            <h2 className="mb-4 text-2xl font-semibold text-white">1. Datenschutz auf einen Blick</h2>
            <h3 className="mb-2 text-lg font-semibold text-white">Allgemeine Hinweise</h3>
            <p className="mb-4">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
              personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene
              Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
              Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem
              Text aufgeführten Datenschutzerklärung.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold text-white">
              2. Datenerfassung auf dieser Website
            </h2>
            <h3 className="mb-2 text-lg font-semibold text-white">
              Wer ist verantwortlich für die Datenerfassung auf dieser Website?
            </h3>
            <p className="mb-4">
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen
              Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
            </p>

            <h3 className="mb-2 text-lg font-semibold text-white">Wie erfassen wir Ihre Daten?</h3>
            <p className="mb-4">
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei
              kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
            </p>
            <p className="mb-4">
              Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website
              durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B.
              Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser
              Daten erfolgt automatisch, sobald Sie diese Website betreten.
            </p>

            <h3 className="mb-2 text-lg font-semibold text-white">Wofür nutzen wir Ihre Daten?</h3>
            <p className="mb-4">
              Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu
              gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
            </p>

            <h3 className="mb-2 text-lg font-semibold text-white">
              Welche Rechte haben Sie bezüglich Ihrer Daten?
            </h3>
            <p className="mb-4">
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und
              Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein
              Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine
              Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung
              jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten
              Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu
              verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen
              Aufsichtsbehörde zu.
            </p>
            <p>
              Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter
              der im Impressum angegebenen Adresse an uns wenden.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold text-white">3. Hosting</h2>
            <p className="mb-4">
              Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser
              Website erfasst werden, werden auf den Servern des Hosters / der Hoster gespeichert.
              Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und
              Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige
              Daten, die über eine Website generiert werden, handeln.
            </p>
            <p className="mb-4">
              Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren
              potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse
              einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch
              einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
            </p>
            <p>
              Unser Hoster wird Ihre Daten nur insoweit verarbeiten, wie dies zur Erfüllung seiner
              Leistungspflichten erforderlich ist und unsere Weisungen in Bezug auf diese Daten
              befolgen.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold text-white">4. Allgemeine Hinweise und Pflichtinformationen</h2>
            <h3 className="mb-2 text-lg font-semibold text-white">Datenschutz</h3>
            <p className="mb-4">
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir
              behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen
              Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>
            <p className="mb-4">
              Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben.
              Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden
              können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und
              wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
            </p>
            <p>
              Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der
              Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der
              Daten vor dem Zugriff durch Dritte ist nicht möglich.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold text-white">5. Server-Log-Dateien</h2>
            <p className="mb-4">
              Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten
              Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
            </p>
            <ul className="mb-4 list-inside list-disc space-y-2">
              <li>Browsertyp und Browserversion</li>
              <li>verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>
            <p className="mb-4">
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
            </p>
            <p>
              Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der
              Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien
              Darstellung und der Optimierung seiner Website – hierzu müssen die Server-Log-Files
              erfasst werden.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold text-white">6. Kontaktformular</h2>
            <p className="mb-4">
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem
              Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks
              Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
              Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
            <p>
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO,
              sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur
              Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen
              beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven
              Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf
              Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold text-white">7. Cookies</h2>
            <p className="mb-4">
              Diese Website verwendet derzeit keine Tracking-Cookies. Sollten in Zukunft Cookies
              eingesetzt werden, werden Sie hierüber entsprechend informiert.
            </p>
          </div>

          <div className="border-t border-white/10 pt-8 text-sm text-gray-400">
            <p>
              Hinweis: Diese Datenschutzerklärung ist ein Platzhalter und muss vor
              Veröffentlichung an die tatsächlichen Gegebenheiten der Website angepasst werden.
              Insbesondere sind konkrete Angaben zum Hosting-Anbieter (Vercel), zur
              Datenverarbeitung und zu den Betroffenenrechten zu ergänzen. Wir empfehlen, einen
              Datenschutzexperten oder Anwalt zu konsultieren.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

