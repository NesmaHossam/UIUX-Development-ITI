<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:fo="http://www.w3.org/1999/XSL/Format">


<xsl:template match="breakfast_menu">
<html>
<body style="background-color:gray;">


<xsl:for-each select="food">
<div style="background-color:pink;">
<h1 style="color:white"><xsl:value-of select="name"/>
-<xsl:value-of select="price"/></h1>
</div>
<div>
<p style="font-size:20px"><xsl:value-of select="description"/> <xsl:value-of select="calories"/><xsl:element name="cal">calories per serving</xsl:element>
</p>
</div>
</xsl:for-each>


</body>
</html>



</xsl:template>


</xsl:stylesheet>
