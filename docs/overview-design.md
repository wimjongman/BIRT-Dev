---
id: overview-design
title: Design
sidebar_label: Design
---

## Introduction

BIRT is an Eclipse-based open source reporting tool for web applications, especially those based on Java. BIRT has two main components: 

+ a report designer based on Eclipse, and 
+ a runtime component that you can add to your app server. 

![img](/img/BIRT-Image-01.png)

BIRT also offers a charting engine that lets you add charts to your own application.

We encourage you to download BIRT, try it, and give us your feedback though the forums, newsgroup and Bugzilla.

With BIRT, you can add a rich variety of reports to your application.

+ Lists - The simplest reports are lists of data. As the lists get longer, you can add grouping to organize related data together (orders grouped by customer, products grouped by supplier). If your data is numeric, you can easily add totals, averages and other summaries.

+ Charts - Numeric data is much easier to understand when presented as a chart. BIRT provides pie charts, line & bar charts and many more. BIRT charts can be rendered in SVG and support events to allow user interaction.

+ Crosstabs - Crosstabs (also called a cross-tabulation or matrix) shows data in two dimensions: sales per quarter or hits per web page.

+ Letters & Documents - Notices, form letters, and other textual documents are easy to create with BIRT. Documents can include text, formatting, lists, charts and more.

+ Compound Reports - Many reports need to combine the above into a single document. For example, a customer statement may list the information for the customer, provide text about current promotions, and provide side-by-side lists of payments and charges. A financial report may include disclaimers, charts, tables all with extensive formatting that matches corporate color schemes.

## The Anatomy of a Report

BIRT reports consist of four main parts: data, data transforms, business logic and presentation.

+ Data - Databases, web services, Java objects all can supply data to your BIRT report. BIRT provides JDBC, XML, Web Services, and Flat File support, as well as support for using code to get at other sources of data. BIRT's use of the Open Data Access (ODA) framework allows anyone to build new UI and runtime support for any kind of tabular data. Further, a single report can include data from any number of data sources. BIRT also supplies a feature that allows disparate data sources to be combined using inner and outer joins.

+ Data Transforms - Reports present data sorted, summarized, filtered and grouped to fit the user's needs. While databases can do some of this work, BIRT must do it for "simple" data sources such as flat files or Java objects. BIRT allows sophisticated operations such as grouping on sums, percentages of overall totals and more.

+ Business Logic - Real-world data is seldom structured exactly as you'd like for a report. Many reports require business-specific logic to convert raw data into information useful for the user. If the logic is just for the report, you can script it using BIRT's JavaScript support. If your application already contains the logic, you can call into your existing Java code.

+ Presentation - Once the data is ready, you have a wide range of options for presenting it to the user. Tables, charts, text and more. A single data set can appear in multiple ways, and a single report can present data from multiple data sets.