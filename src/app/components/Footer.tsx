export default function Footer() {
  return (
    <footer className="bg-gray-100 text-center py-6 mt-20 border-t">
      <p className="text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Dietitian Lufuno. All rights reserved.
      </p>
    </footer>
  );
}
