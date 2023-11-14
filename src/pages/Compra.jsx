import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";
import { useUserContext } from "../context/UserContext";
// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: "gray",
    color: "white",
  },
  section: {
    margin: 10,
    padding: 10,
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
        {/* Start of the document*/}
        <Document>
          {/*render a single page*/}
          <Page size="A4" style={styles.page}>
            <View style={styles.section}>
              <Text>Numero de cuenta:</Text>
            </View>
            <View style={styles.section}>
              <Text>Cantidad a pagar:</Text>
              <Text>{totalCompra}</Text>
            </View>
          </Page>
        </Document>
      </PDFViewer>
    </div>
  );
};
export default Compra;
