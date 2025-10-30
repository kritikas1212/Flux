# 🖥️ Development Server Guide

## Understanding the "EADDRINUSE" Error

### **Why It Happens**

The error `EADDRINUSE: address already in use 127.0.0.1:9292` occurs when:

1. ✅ **Server is already running** - You (or a script) already started it
2. ❌ **You try to start it again** - Running the command a second time
3. 💥 **Port conflict** - Two processes can't use the same port

### **The Problem:**
```bash
Terminal 1: shopify theme dev  ← Server running here
Terminal 2: shopify theme dev  ← ERROR! Port already taken
```

---

## ✅ **SOLUTION 1: Use the Easy Start Script**

I've created a smart script that handles everything for you:

```bash
cd /Users/kritikasingh/Desktop/flux_theme
./start-dev-server.sh
```

**What it does:**
- ✅ Checks if port is in use
- ✅ Offers to kill existing process
- ✅ Offers to use different port
- ✅ Starts server cleanly

---

## ✅ **SOLUTION 2: Manual Control**

### **Step 1: Check if Server is Running**
```bash
lsof -ti:9292
```

**If you see numbers:** Server is running (those are process IDs)  
**If you see nothing:** Port is free, safe to start

### **Step 2A: If Running - Stop It**
```bash
# Kill all processes on port 9292
kill -9 $(lsof -ti:9292)
```

### **Step 2B: If Free - Start Server**
```bash
shopify theme dev --open
```

---

## ✅ **SOLUTION 3: Use Different Port**

Instead of fighting for port 9292, use a different one:

```bash
shopify theme dev --port 3000 --open
```

Then visit: **http://127.0.0.1:3000**

---

## 🎯 **BEST PRACTICES**

### **DO:**
✅ Run `shopify theme dev` **ONCE** in one terminal  
✅ Keep that terminal open while working  
✅ Open **NEW** terminals for other commands  
✅ Press `Ctrl+C` to stop when done  
✅ Use the start script for easy management  

### **DON'T:**
❌ Run `shopify theme dev` multiple times  
❌ Close terminal while server is running  
❌ Try to start on same port twice  
❌ Panic when you see the error (it's easy to fix!)  

---

## 📋 **RECOMMENDED WORKFLOW**

### **Terminal 1: Development Server**
```bash
cd /Users/kritikasingh/Desktop/flux_theme
shopify theme dev --open

# Leave this running
# Don't close this terminal
# You'll see live logs here
```

### **Terminal 2: CSS Watching (Optional)**
```bash
cd /Users/kritikasingh/Desktop/flux_theme
npm run watch:css

# Leave this running too
# It rebuilds CSS on changes
```

### **Terminal 3: Other Commands**
```bash
cd /Users/kritikasingh/Desktop/flux_theme

# Use this for:
git status
git add .
git commit -m "message"
# etc.
```

---

## 🔍 **TROUBLESHOOTING**

### **Issue: "EADDRINUSE" Error**
**Quick Fix:**
```bash
# One-liner to kill and restart
kill -9 $(lsof -ti:9292) 2>/dev/null; sleep 2; shopify theme dev --open
```

### **Issue: Server Won't Stop**
```bash
# Force kill all Shopify CLI processes
pkill -9 -f "shopify"
```

### **Issue: Browser Doesn't Open**
- Manually go to: http://127.0.0.1:9292
- Check terminal for actual URL
- Try: `shopify theme dev --open`

### **Issue: Changes Not Appearing**
1. Check terminal for errors
2. Hard refresh: `Cmd + Shift + R`
3. Restart server
4. Clear browser cache

### **Issue: Port Already Used by Something Else**
```bash
# Find what's using the port
lsof -i:9292

# See full command
lsof -i:9292 | grep LISTEN

# Kill it
kill -9 <PID>
```

---

## 🎮 **CONTROL COMMANDS**

### **Start Server**
```bash
shopify theme dev --open           # Start with browser
shopify theme dev                  # Start without browser
shopify theme dev --port 3000     # Use different port
```

### **Stop Server**
- **Method 1:** Press `Ctrl + C` in terminal
- **Method 2:** `kill -9 $(lsof -ti:9292)`
- **Method 3:** Close the terminal (not recommended)

### **Check Server Status**
```bash
# Check if running on port 9292
lsof -ti:9292

# Test connection
curl -I http://127.0.0.1:9292

# In browser
open http://127.0.0.1:9292
```

### **Restart Server**
```bash
# Stop
kill -9 $(lsof -ti:9292)

# Wait
sleep 2

# Start
shopify theme dev --open
```

---

## 📊 **SERVER STATUS INDICATORS**

### **✅ Server is Running When:**
- Terminal shows "Serving http://127.0.0.1:9292"
- `lsof -ti:9292` returns process IDs
- Browser loads http://127.0.0.1:9292
- You see theme preview

### **❌ Server is NOT Running When:**
- Terminal prompt is back (e.g., `username@computer folder %`)
- `lsof -ti:9292` returns nothing
- Browser shows "Can't connect"
- No output in terminal

---

## 🚀 **QUICK REFERENCE**

| Task | Command |
|------|---------|
| **Start (easy way)** | `./start-dev-server.sh` |
| **Start (manual)** | `shopify theme dev --open` |
| **Stop** | Press `Ctrl + C` |
| **Force kill** | `kill -9 $(lsof -ti:9292)` |
| **Check status** | `lsof -ti:9292` |
| **Use different port** | `shopify theme dev --port 3000` |
| **Restart** | Kill processes, then start again |

---

## 💡 **WHY THIS MATTERS**

### **Understanding Ports**
- A **port** is like a door on your computer
- Port 9292 is the default for Shopify theme dev
- Only **ONE** process can use a port at a time
- If occupied, you get **EADDRINUSE** error

### **The Development Server**
- Runs **continuously** until you stop it
- Watches for file changes
- Hot-reloads CSS and sections
- Refreshes page for template changes
- Shows real-time logs

---

## 🎯 **START YOUR SERVER NOW**

### **Option 1: Use the Script (Easiest)**
```bash
cd /Users/kritikasingh/Desktop/flux_theme
./start-dev-server.sh
```

### **Option 2: Manual (Clean Slate)**
```bash
cd /Users/kritikasingh/Desktop/flux_theme

# Ensure port is free
kill -9 $(lsof -ti:9292) 2>/dev/null
sleep 2

# Start fresh
shopify theme dev --open
```

### **Option 3: Different Port (No Conflicts)**
```bash
cd /Users/kritikasingh/Desktop/flux_theme
shopify theme dev --port 3000 --open
```

---

## 📞 **STILL HAVING ISSUES?**

### **Emergency Reset**
```bash
# Kill everything Shopify-related
pkill -9 -f shopify

# Wait a moment
sleep 3

# Check port is free
lsof -ti:9292  # Should return nothing

# Start fresh
cd /Users/kritikasingh/Desktop/flux_theme
shopify theme dev --open
```

### **If All Else Fails**
1. Restart your terminal
2. Restart your computer
3. Check firewall settings
4. Try a different port (3000, 8080, etc.)

---

## ✅ **SUMMARY**

**The error happens because:**
- Server is already running on port 9292
- You're trying to start it again

**The solution is simple:**
1. Kill existing process: `kill -9 $(lsof -ti:9292)`
2. Start fresh: `shopify theme dev --open`

**Or use the easy script:**
```bash
./start-dev-server.sh
```

---

**Remember:** Only run `shopify theme dev` **ONCE** per port! 🎯

