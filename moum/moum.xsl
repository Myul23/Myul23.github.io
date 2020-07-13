<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" 
	xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="/">
		<html>
			<body>
				<p>
					<xsl:value-of select="moum/title" />
				</p>
				<xsl:value-of select="moum/essential">
					<xsl:apply-template select="mode" />
				</xsl:value-of>
				<xsl:apply-template select="mode" />
			</body>
		</html>
	</xsl:template>

	<xsl:template match="mode">
		<table border="1" style="width: 100%;">
			<tr bgcolor="azure">
				<th>name</th>
				<th>scope</th>
				<td>detail</td>
			</tr>
			<xsl:for-each select=".">
				<xsl:sort select="name" />
				<tr>
					<th>
						<a>
							<xsl:attribute name="href">
								<xsl:value-of select="site" />
							</xsl:attribute>
							<xsl:value-of select="name" />
						</a>
					</th>
					<td>
						<xsl:value-of select="scope" />
					</td>
					<td>
						<button onclick="spreadNext(this, 1);"></button>
					</td>
				</tr>
				<tr>
					<td>
						<xsl:value-of select="detail" />
					</td>
				</tr>
			</xsl:for-each>
		</table>
	</xsl:template>
</xsl:stylesheet>
