package com.example.a10rd_calcu

import android.os.Bundle
import android.widget.Button
import android.widget.TextView
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import androidx.core.view.ViewCompat
import androidx.core.view.WindowInsetsCompat

class MainActivity : AppCompatActivity() {
    private lateinit var tvResult: TextView
    private var currentInput = ""
    private var firstNum = 0.0
    private var op = ""

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContentView(R.layout.activity_main)
        ViewCompat.setOnApplyWindowInsetsListener(findViewById(R.id.main)) { v, insets ->
            val systemBars = insets.getInsets(WindowInsetsCompat.Type.systemBars())
            v.setPadding(systemBars.left, systemBars.top, systemBars.right, systemBars.bottom)
            insets
        }

        tvResult = findViewById(R.id.textView)

        // 숫자 버튼 매핑 (8과 9 ID 바뀐 것 수정 완료)
        val numButtons = mapOf(
            R.id.button15 to "0", R.id.button14 to "1", R.id.button12 to "2",
            R.id.button to "3", R.id.button16 to "4", R.id.button17 to "5",
            R.id.button13 to "6", R.id.button19 to "7", R.id.button20 to "8",
            R.id.button18 to "9"
        )

        for ((id, numStr) in numButtons) {
            findViewById<Button>(id).setOnClickListener {
                currentInput += numStr
                tvResult.text = currentInput
            }
        }

        // 연산자 설정 및 화면 표시 함수
        fun setOperator(operator: String) {
            if (currentInput.isNotEmpty()) {
                firstNum = currentInput.toDouble()
                op = operator
                tvResult.text = "$firstNum $op" // 화면에 연산자 표시
                currentInput = ""
            }
        }

        // 연산 버튼 리스너 연결 (+, -, *, /)
        findViewById<Button>(R.id.button25).setOnClickListener { setOperator("+") }
        findViewById<Button>(R.id.button26).setOnClickListener { setOperator("-") }
        findViewById<Button>(R.id.buttonMultiply).setOnClickListener { setOperator("*") }
        findViewById<Button>(R.id.buttonDivide).setOnClickListener { setOperator("/") }

        // 계산 수행 공통 함수 (엔터나 = 눌렀을 때 공용 사용)
        fun calculate() {
            if (currentInput.isNotEmpty() && op.isNotEmpty()) {
                val secondNum = currentInput.toDouble()
                val result = when (op) {
                    "+" -> firstNum + secondNum
                    "-" -> firstNum - secondNum
                    "*" -> firstNum * secondNum
                    "/" -> if (secondNum != 0.0) firstNum / secondNum else 0.0
                    else -> 0.0
                }
                tvResult.text = result.toString()
                currentInput = result.toString()
                op = ""
            }
        }

        // 결과(=) 버튼
        findViewById<Button>(R.id.buttonEqual).setOnClickListener {
            calculate()
        }

        // Clear(초기화) 버튼
        findViewById<Button>(R.id.button21).setOnClickListener {
            currentInput = ""
            firstNum = 0.0
            op = ""
            tvResult.text = "0"
        }
    }
}