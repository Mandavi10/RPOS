using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Encryption;

namespace FRD_DAL.CommonUtility
{
   public class DbSecurity
    {
        // Used to Decrypt the Passed Value on the Basis of a Fixed Key.
       public static string Decrypt(string Value)
       {
           string strValue1;
           string strValue2;
           string[] sp = Value.Split('|');
           strValue1 = sp[0];
           strValue2 = sp[1];
           string[] arrValue1 = strValue1.Split(' ');
           string[] arrValue2 = strValue2.Split(' ');
           if (arrValue1.Length > 0)
           {
               strValue1 = "";
               for (int i = 1; i <= arrValue1.Length; i++)
               {
                   strValue1 = strValue1 + arrValue1[i - 1];
                   if (i < arrValue1.Length)
                   {
                       strValue1 = strValue1 + "+";
                   }
               }
           }
           if (arrValue2.Length > 0)
           {
               strValue2 = "";
               for (int i = 1; i <= arrValue2.Length; i++)
               {
                   strValue2 = strValue2 + arrValue2[i - 1];
                   if (i < arrValue2.Length)
                   {
                       strValue2 = strValue2 + "+";
                   }
               }
           }
           EncryptionAlgorithm alg = EncryptionAlgorithm.Rc2;
           byte[] IV = Convert.FromBase64String(strValue2);
           Decryptor dec = new Decryptor(alg, IV);
           string strValue = dec.Decrypt(strValue1, "abcd12345");
           return strValue;
       }
        public static string Decrypt(string Value, string key)
        {
            string strValue1;
            string strValue2;
            string[] sp = Value.Split('|');
            strValue1 = sp[0];
            strValue2 = sp[1];
            string[] arrValue1 = strValue1.Split(' ');
            string[] arrValue2 = strValue2.Split(' ');
            if (arrValue1.Length > 0)
            {
                strValue1 = "";
                for (int i = 1; i <= arrValue1.Length; i++)
                {
                    strValue1 = strValue1 + arrValue1[i - 1];
                    if (i < arrValue1.Length)
                    {
                        strValue1 = strValue1 + "+";
                    }
                }
            }
            if (arrValue2.Length > 0)
            {
                strValue2 = "";
                for (int i = 1; i <= arrValue2.Length; i++)
                {
                    strValue2 = strValue2 + arrValue2[i - 1];
                    if (i < arrValue2.Length)
                    {
                        strValue2 = strValue2 + "+";
                    }
                }
            }
            EncryptionAlgorithm alg = EncryptionAlgorithm.Rc2;
            byte[] IV = Convert.FromBase64String(strValue2);
            Decryptor dec = new Decryptor(alg, IV);
            string strValue = dec.Decrypt(strValue1, key);
            return strValue;
        }
       
        public static string Encrypt(string Value)
        {
            EncryptionAlgorithm alg = EncryptionAlgorithm.Rc2;
            Encryptor en = new Encryptor(alg, "abcd12345"); // If You Lost the Key you would not be able to Decrypt the encrypted Value.
            string EncValue = en.Encrypt(Value);
            string IVserverName = Convert.ToBase64String(en.IV);
            string strEncValue = EncValue + "|" + IVserverName;
            return strEncValue;
        }
        public static string Encrypt(string value, ref string key)
        {
            EncryptionAlgorithm alg = EncryptionAlgorithm.Rc2;
            key = Global.CreateRandomCode(9);
            Encryptor en = new Encryptor(alg, key); // This key need to be moved to database
            string EncValue = en.Encrypt(value);            // If You Lost the Key you would not be able to Decrypt the encrypted Value.
            string IVserverName = Convert.ToBase64String(en.IV);
            string strEncValue = EncValue + "|" + IVserverName;
            return strEncValue;
        }
    }
}
