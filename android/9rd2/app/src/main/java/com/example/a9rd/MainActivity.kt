package com.example.a9rd

import android.os.Bundle
import android.view.View
import android.widget.Button
import android.widget.EditText
import android.widget.TextView
import android.widget.Toast
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import androidx.core.view.ViewCompat
import androidx.core.view.WindowInsetsCompat

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContentView(R.layout.activity_main)
        ViewCompat.setOnApplyWindowInsetsListener(findViewById(R.id.main)) { v, insets ->
            val systemBars = insets.getInsets(WindowInsetsCompat.Type.systemBars())
            v.setPadding(systemBars.left, systemBars.top, systemBars.right, systemBars.bottom)
            insets
        }
    }

    fun onButtonClick(view: View?) {
        val num1 = findViewById<EditText>(R.id.editNum1).text.toString().toIntOrNull() ?: 0
        val num2 = findViewById<EditText>(R.id.editNum2).text.toString().toIntOrNull() ?: 0
        val sum = num1 + num2

        findViewById<TextView>(R.id.textViewResult).text = sum.toString()
        Toast.makeText(applicationContext, "두 수의 합은 $sum 입니다", Toast.LENGTH_SHORT).show()
    }
}