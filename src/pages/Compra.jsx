import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
  Image,
} from "@react-pdf/renderer";
import { useUserContext } from "../context/UserContext";
// Creacion de stilos para la renderizacion de PDF
const styles = StyleSheet.create({
  page: {
    backgroundColor: "black",
    color: "white",
  },
  section: {
    margin: 10,
    padding: 10,
    textAlign: "center",
  },
  sectionImage: {
    margin: 10,
    padding: 10,
    width: 400,
    height: 400,
    alignSelf: "center",
  },
  viewer: {
    width: window.innerWidth / 1.4, //the pdf viewer will take up all of the width and height
    height: window.innerHeight / 1.2,
  },
});

const Compra = () => {
  const { totalCompra } = useUserContext();
  return (
    <div className="flex justify-center items-center">
      <PDFViewer style={styles.viewer}>
        {/* Inicio de PDF*/}
        <Document>
          {/*renderizacion  por pagina*/}
          <Page size="A4" style={styles.page}>
            <View>
              <Image
                style={styles.sectionImage}
                src="/images/CIERDCARS_LOGO.png"
              />
            </View>
            <View style={styles.section}>
              <Text>Numero de cuenta:</Text>
              <Text>0000 0000 1111 1554</Text>
            </View>
            <View style={styles.section}>
              <Text>Cantidad a pagar:</Text>

              {/*formato a numero del total de la compra*/}
              <Text>$ {new Intl.NumberFormat().format(totalCompra)}</Text>
            </View>
          </Page>
        </Document>
      </PDFViewer>
    </div>
  );
};
export default Compra;
