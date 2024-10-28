# Raw Material Inventory Management

## Brief Description
The **Raw Material Inventory Management** system is a web application that manages the inventory of raw materials for a manufacturing unit. It provides users with a structured interface to add, update, and track inventory items, as well as record receipts (inward transactions) and issues (outward transactions). Built using HTML, CSS, JavaScript, jQuery, Bootstrap, and JSONPowerDB as the database, this application aims to streamline inventory management by providing essential functionalities and validations.

## Demo Video
You can view a demo of this project [here](https://drive.google.com/file/d/1iZogBlm06VhBlm7InxoJKOj8nEqreAEj/view?usp=sharing).

---

## Important Links
- **Home Page**: [JsonPowerDB Home](https://login2explore.com)
- **Register to use JsonPowerDB**: [Sign Up](http://api.login2explore.com)
- **JsonPowerDB Help**: [Documentation](https://login2explore.com/jpdb/docs.html)

---

## Table of Contents
- [Project Description](#brief-description)
- [Scope of Functionalities](#scope-of-functionalities)
- [Examples of Use](#examples-of-use)
- [Project Status](#project-status)
- [Sources](#sources)

---

## Content
Below are some screenshots of the application:
1. **Dashboard**: Displays navigation and allows access to various pages like Item Management, Item Received, Item Issued, and Item Report.
2. **Item Management Page**: Used to add, edit, and view items.
3. **Item Received and Issued Pages**: Manage inward and outward transactions, updating the stock levels accordingly.
4. **Item Report Page**: Displays a report of items within a specified ID range.

---

## Scope of Functionalities
The application supports the following functionalities:
- **Add New Items**: Register new raw materials with item details such as Item ID, Name, Opening Stock, etc.
- **Manage Inward Transactions**: Add received quantities to inventory and update the total stock level.
- **Manage Outward Transactions**: Record items issued, ensuring stock levels are appropriately adjusted.
- **Generate Reports**: Display inventory data within a specified item ID range.
- **Navigation Controls**: Includes buttons for navigating records and updating item entries with intuitive controls and validations.

---

## Examples of Use
1. **Adding a New Item**: Navigate to the Item Management page, enter the item details, and click on the "Save Item" button.
2. **Receiving Stock**: Go to the Item Received page, input the receipt details, and update the database. This also automatically updates the `itemsReceived` field in the Items relation.
3. **Issuing Stock**: On the Item Issued page, record the items issued. The system validates that the issued quantity does not exceed available stock.
4. **Generating Reports**: Use the Item Report page to fetch and display item details for a given range of item IDs.

---

## Project Status
- **Current Status**: Functional prototype
- **Pending Features**: Additional validation checks, improved UI styling, and responsive design enhancements.

---

## Sources
- **JSONPowerDB Documentation**: [JsonPowerDB Docs](https://login2explore.com/jpdb/docs.html)
- **Bootstrap Documentation**: [Bootstrap Docs](https://getbootstrap.com/docs)
- **jQuery Documentation**: [jQuery Docs](https://api.jquery.com)

---
