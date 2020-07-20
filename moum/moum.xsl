<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
	xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="/">
		<html>
			<head>
				<script src="../Review Lessons/dynamic.js"></script>
			</head>
			<body>
				<h1>
					<xsl:value-of select="moum/title" />
				</h1>
				<xsl:for-each select="moum/essential">
					<h3>
						<xsl:value-of select="local-name()" />
					</h3>
					<xsl:apply-templates select="mode"/>
				</xsl:for-each>
				<xsl:for-each select="moum/upper">
					<h3>
						<xsl:value-of select="local-name()" />
					</h3>
					<xsl:apply-templates select="mode"/>
				</xsl:for-each>
				<xsl:for-each select="moum/general">
					<h3>
						<xsl:value-of select="local-name()" />
					</h3>
					<xsl:apply-templates select="mode"/>
				</xsl:for-each>
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
						<button onclick="spreadNext(this, 1);">addition</button>
					</td>
				</tr>
				<tr style="display: none;">
					<td colspan="3">
						<xsl:value-of select="detail" />
					</td>
				</tr>
			</xsl:for-each>
		</table>
	</xsl:template>
</xsl:stylesheet>
