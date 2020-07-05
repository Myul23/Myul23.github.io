<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/">
    <html style="font-family: Times New Roman, serif;">
    <body style="font-size: 5em;">
      <p><xsl:value-of select="moum/title" /></p>
      <table border="1" style="width: 100%;">
        <tr bgcolor="azure">
          <th>name</th>
          <th>scope</th>
          <th>site</th>
        </tr>
        <xsl:for-each select="moum/mode">
          <xsl:sort select="name" />
          <tr>
            <th><xsl:value-of select="name" /></th>
            <td><xsl:value-of select="scope" /></td>
            <td><xsl:value-of select="site" /></td>
          </tr>
        </xsl:for-each>
      </table>
    </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
