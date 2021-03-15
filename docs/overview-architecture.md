---
id: overview-architecture
title: Archticture
sidebar_label: Archticture
---
![img](/img/BIRT-Architektur-01_V2.png)

## BIRT Components

The BIRT project delivers many components. These are listed below with a brief description. More information about BIRT components and architecture is available in the documentation section.

+ BIRT Report Designer - The BIRT Report Designer is an Eclipse perspective that is used to create BIRT report designs. These designs are stored in an open XML format. The Designer can be downloaded as a Rich Client Platform (RCP) application, a set of plug-ins to enable the Designer perspective within an existing Eclipse build or as an all in one download that includes Eclipse.

+ Design Engine - This engine is responsible for creating and modifying report designs. The Design Engine API (DE API) wraps the functionality of the design engine and is available for use within any Java/Java EE project. The BIRT Report Designer uses this API internally to construct the XML designs.

+ Report Engine - The Report Engine uses the report design files to generate and render reports. Using the Report Engine API (RE API) the engine can be embedded within any Java/Java EE application. The BIRT Web Viewer uses this API to execute and display reports.

+ Charting Engine - The Charting Engine is used to design and generate Charts either in standalone or embedded within BIRT reports. The Charting Engine API (CE API) allows Java/Java EE developers to add charting capabilities to their applications. The Design and Report Engines make use of this API to deliver Charts.

+ BIRT Viewer - The BIRT project provides a sample "viewer" that is used to preview reports within Eclipse. BIRT includes an Apache Tomcat server invoked each time you preview your report. In addition to being packaged as an Eclipse Plug-in, the Viewer is also available as a standalone Java EE application, which can be used in any JSP-compliant Java EE server. The Viewer Plug-in can also be embedded within a Rich Client Platform (RCP) application. BIRT provides web output as a single HTML document, paginated HTML, PDF, XLS, DOC, PPT, and Postscript. Additionally the viewer allows exporting the data to CSV, printing, and Table of Contents functionality.
