let governorate = window.prompt('.أدخل محافظتك');

switch (governorate.toLowerCase()) {
    case "cairo":
        document.write("5%");
        break;
    case "aswan":
        document.write("30%");
        break;
    case "alexandria":
        document.write("10%");
        break;
    default:
        document.write("7%");
}
