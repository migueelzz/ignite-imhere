import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#131016',
      padding: 24,
    },
  
    title: {
      color: '#FDFCFE',
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 48
    },
  
    textBase: {
      color: '#6B6B6B',
      fontSize: 16,
    },

    input: {
      flex: 1,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#1F1E25',
        color: '#FDFCFE',
        padding: 16,
        fontSize: 16,
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#31CF67',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 24,
        color: '#FDFCFE'
    },
    form: {
      width: '100%',
      flexDirection: 'row',
      gap: 8,
      marginTop: 36,
      marginBottom: 42,
    },
    listEmptyText: {
      color: '#FFF',
      fontSize: 14,
      textAlign: 'center'
    }
  });